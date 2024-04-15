import type { Metadata } from 'next'
import './globals.css'
import { AuthProvider } from './providers/auth-provider'

export const metadata: Metadata = {
  title: 'Playfieldz',
  description: 'Organize sua pelada!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className="flex h-screen flex-col gradient-background">
          {children}
        </body>
      </html>
    </AuthProvider>
  )
}
