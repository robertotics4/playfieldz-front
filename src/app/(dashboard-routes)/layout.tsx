import { getServerSession } from 'next-auth'
import { nextAuthOptions } from '../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

type PrivateLayoutProps = {
  children: React.ReactNode
}

export default async function PrivateLayout({ children }: PrivateLayoutProps) {
  const session = await getServerSession(nextAuthOptions)

  if (!session) {
    redirect('/')
  }

  if (new Date(session.expiresIn) <= new Date()) {
    document.cookie =
      'next-auth-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
    redirect('/')
  }

  return <div className="flex flex-col p-8">{children}</div>
}
