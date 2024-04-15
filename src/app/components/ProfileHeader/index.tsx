import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import { BiPowerOff } from 'react-icons/bi'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

const defaultProfilePic =
  'https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg'

export async function ProfileHeader() {
  const session = await getServerSession(nextAuthOptions)

  async function getFormattedCurrentDate() {
    const formattedDate = format(new Date(), "eee, d 'de' MMMM", {
      locale: ptBR,
    })

    return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1)
  }

  return (
    <header className="flex w-full items-center justify-between">
      <div className="flex">
        <img
          className="w-14 h-14 rounded-full"
          src={defaultProfilePic}
          alt="Profile Image"
        />
        <div className="flex flex-col ml-2 justify-center">
          <span className="text-zinc-500 font-normal text-base">
            Olá {session?.user.name}!
          </span>
          <h4 className="text-zinc-500 font-bold text-base">
            {getFormattedCurrentDate()}
          </h4>
        </div>
      </div>
      <button
        type="button"
        className="flex items-center justify-center w-14 h-14 border-2 rounded-full border-zinc-100"
      >
        <BiPowerOff className="text-4xl text-zinc-500" />
      </button>
    </header>
  )
}
