import { getServerSession } from 'next-auth'
import { nextAuthOptions } from '../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

type PublicLayoutProps = {
  children: React.ReactNode
}

export default async function PublicLayout({ children }: PublicLayoutProps) {
  const session = await getServerSession(nextAuthOptions)

  if (session) {
    redirect('/admin')
  }

  return <div>{children}</div>
}
