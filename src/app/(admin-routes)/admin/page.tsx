import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route"
import { SignOutButton } from "@/components/sign-out-button"
import { getServerSession } from "next-auth"

export default async function Admin() {
  const session = await getServerSession(nextAuthOptions)

  return (
    <div className="w-full max-w-screen-xl h-screen flex flex-col justify-center items-center gap-8">
      <h1>{`Olá ${session?.user.name}. Bem vindo!`}</h1>
      {session && (
        <pre className="bg-slate-900 text-slate-50 p-10 rounded-lg mt-10 w-fit">
          {JSON.stringify(session, null, 2)}
        </pre>
      )}

      <SignOutButton>Sair</SignOutButton>
    </div>
  )
}