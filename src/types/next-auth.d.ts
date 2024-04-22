import NextAuth from 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: {
      id: string
      phone: string
      name: string
    }
    token: string
    tokenExpirationInSeconds: number
    expiresIn: Date
  }
}
