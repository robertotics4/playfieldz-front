import NextAuth from 'next-auth/next'
import { NextAuthOptions, User } from 'next-auth'
import CredentialProvider from 'next-auth/providers/credentials'

interface CustomUser extends User {
  id: string
  phone: string
  name: string
}

const nextAuthOptions: NextAuthOptions = {
  providers: [
    CredentialProvider({
      name: 'credentials',
      credentials: {
        phone: { label: 'phone', type: 'text', placeholder: 'Telefone' },
        password: { label: 'password', type: 'password', placeholder: 'Senha' },
      },

      async authorize(credentials) {
        const response = await fetch('http://localhost:3333/auth/sign-in', {
          method: 'POST',
          body: JSON.stringify({
            phone: credentials?.phone,
            password: credentials?.password,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        })

        const authData = await response.json()

        if (authData && response.ok) {
          return authData
        }

        return null
      },
    }),
  ],

  callbacks: {
    jwt: ({ token, user }) => {
      user && (token.user = user)

      return token
    },
    session: async ({ session, token }) => {
      session = token.user as any
      
      return session
    },
  },
  pages: {
    signIn: '/',
  },
}

const handler = NextAuth(nextAuthOptions)

export { handler as GET, handler as POST, nextAuthOptions }
