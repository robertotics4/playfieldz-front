import { GroupCard } from '@/app/components/GroupCard'
import { GroupService } from '@/app/services/groups/GroupService'
import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import { Group } from '@/app/types/entities/Group'
import { ProfileHeader } from '@/app/components/ProfileHeader'

export default async function Dashboard() {
  const session = await getServerSession(nextAuthOptions)

  if (!session?.token) {
    throw new Error('Sessão inválida, tente novamente.')
  }

  const groupService = GroupService.getInstance(session.token)

  async function loadGroups(userId: string): Promise<Group[]> {
    return await groupService.findGroups({
      createdBy: userId,
    })
  }

  if (session) {
    const groups = await loadGroups(session.user.id)

    return (
      <main className="flex flex-col">
        <ProfileHeader />

        <div className="mt-12">
          <h1 className="font-bold text-xl text-slate-800">Grupos</h1>

          {groups.map((group: Group) => (
            <GroupCard key={group._id} groupData={group} />
          ))}
        </div>
      </main>
    )
    return <h1>hello world</h1>
  }
}
