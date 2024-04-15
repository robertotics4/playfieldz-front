'use client'

import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { BiPowerOff } from 'react-icons/bi'

export function SignOutButton() {
  const router = useRouter()

  async function handleLogout() {
    await signOut({
      redirect: false,
    })

    router.replace('/')
  }

  return (
    <button
      type="button"
      onClick={handleLogout}
      className="flex items-center justify-center w-14 h-14 border-2 rounded-full border-zinc-100"
    >
      <BiPowerOff className="text-4xl text-zinc-500" />
    </button>
  )
}
