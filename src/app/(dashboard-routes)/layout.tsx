import { getServerSession } from 'next-auth'
import { nextAuthOptions } from '../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'
import { ProfileHeader } from '../components/ProfileHeader'

type PrivateLayoutProps = {
  children: React.ReactNode
}

export default async function PrivateLayout({ children }: PrivateLayoutProps) {
  const session = await getServerSession(nextAuthOptions)

  if (!session) {
    redirect('/')
  }

  return (
    <div className="flex flex-col p-8">
      <ProfileHeader />
      {children}
    </div>
  )
}
