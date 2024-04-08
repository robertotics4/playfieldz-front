'use client'

import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'

interface SignOutButtonProps {
  children: React.ReactNode
}

export const SignOutButton = ({ children }: SignOutButtonProps) => {
  const router = useRouter()
  
  async function handleLogout() {
    await signOut({
      redirect: false
    })

    router.replace('/')
  }

  return <button type="button" onClick={handleLogout} className="p-4 bg-slate-800 text-white rounded-md">{children}</button>
}
