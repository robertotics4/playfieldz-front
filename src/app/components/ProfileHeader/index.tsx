import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { SignOutButton } from '@/components/SignOutButton'

const defaultProfilePic =
  'https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg'

export async function ProfileHeader() {
  const session = await getServerSession(nextAuthOptions)

  function getFormattedCurrentDate() {
    const formattedDate = format(new Date(), "eee, d 'de' MMMM", {
      locale: ptBR,
    })

    return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1)
  }

  return (
    session && (
      <header className="flex w-full items-center justify-between">
        <div className="flex">
          <img
            className="w-14 h-14 rounded-full"
            src={defaultProfilePic}
            alt="Profile Image"
          />
          <div className="flex flex-col ml-2 justify-center">
            <span className="text-zinc-500 font-normal text-base">
              Olá {session.user.name}!
            </span>
            <h4 className="text-slate-800 font-bold text-base">
              {getFormattedCurrentDate()}
            </h4>
          </div>
        </div>

        <SignOutButton />
      </header>
    )
  )
}
