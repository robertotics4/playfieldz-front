import NextAuth from 'next-auth/next'
import { NextAuthOptions } from 'next-auth'
import CredentialProvider from 'next-auth/providers/credentials'
import { signInRequest } from '@/app/services/auth'

const nextAuthOptions: NextAuthOptions = {
  providers: [
    CredentialProvider({
      name: 'credentials',
      credentials: {
        phone: { label: 'phone', type: 'text', placeholder: 'Telefone' },
        password: { label: 'password', type: 'password', placeholder: 'Senha' },
      },

      async authorize(credentials) {
        if (!credentials) {
          return null
        }

        const authData = await signInRequest({
          phone: credentials?.phone,
          password: credentials?.password,
        })

        if (authData) {
          return authData as any
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
