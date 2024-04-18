import { GroupPlayer } from '@/app/components/GroupCard/GroupPlayer'
import { GroupCardInfo } from '@/app/components/GroupCard/GroupCardInfo'
import { Group, PlayerSubscription } from '@/app/types/entities/Group'
import { Session, getServerSession } from 'next-auth'
import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/route'
import { GroupService } from '@/app/services/groups/GroupService'

type GroupPageProps = {
  params: {
    _id: string
  }
}

export default async function GroupPage({ params }: GroupPageProps) {
  const session = await getServerSession(nextAuthOptions)
  const groupService = GroupService.getInstance()

  async function loadGroup(session: Session, groupId: string): Promise<Group> {
    const result = await groupService.findGroups(session.token, {
      _id: groupId,
    })

    return result[0]
  }

  if (session) {
    const group = await loadGroup(session, params._id)

    if (group) {
      return (
        <div>
          <GroupCardInfo />

          <div className="flex flex-col gap-6">
            <h1 className="font-bold mt-12 text-xl text-slate-800">
              Jogadores
            </h1>

            {group.playerSubscriptions.map((sub) => (
              <GroupPlayer
                key={sub.player._id}
                subscriptionData={sub as PlayerSubscription}
              />
            ))}
          </div>
        </div>
      )
    }
  }
}
