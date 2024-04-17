import { GroupCard } from '@/app/components/GroupCard'
import { GroupService } from '@/app/services/groups/GroupService'
import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/route'
import { Session, getServerSession } from 'next-auth'
import { Group } from '@/app/types/entities/Group'

export default async function Admin() {
  const session = await getServerSession(nextAuthOptions)
  const groupService = GroupService.getInstance()

  async function loadGroups(session: Session): Promise<Group[]> {
    return await groupService.findGroups(session.token, {
      createdBy: session.user.id,
    })
  }

  if (session) {
    const groups = await loadGroups(session)

    return (
      <main className="flex flex-col">
        <div className="mt-12">
          <h1 className="font-bold text-xl text-slate-800">Grupos</h1>

          {groups.map((group: Group) => (
            <GroupCard key={group._id} />
          ))}
        </div>
      </main>
    )
  }
}
