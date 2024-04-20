import { getServerSession } from 'next-auth'
import { GroupPlayer } from '@/app/components/GroupCard/GroupPlayer'
import { GroupCardInfo } from '@/app/components/GroupCard/GroupCardInfo'
import { Group, PlayerSubscription } from '@/app/types/entities/Group'
import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/route'
import { GroupService } from '@/app/services/groups/GroupService'
import { MatchService } from '@/app/services/matches/MatchService'
import { Match } from '@/app/types/entities/Match'
import { MatchCard } from '@/app/components/MatchCard'

type GroupPageProps = {
  params: {
    _id: string
  }
}

export default async function GroupPage({ params }: GroupPageProps) {
  const session = await getServerSession(nextAuthOptions)

  if (!session?.token) {
    throw new Error('Sessão inválida, tente novamente.')
  }

  const groupService = GroupService.getInstance(session.token)
  const matchService = MatchService.getInstance(session.token)

  async function loadGroup(groupId: string): Promise<Group> {
    const result = await groupService.findGroups({
      _id: groupId,
    })

    return result[0]
  }

  async function loadMatches(groupId: string): Promise<Match[]> {
    return await matchService.findMatches({
      group: groupId,
    })
  }

  if (session) {
    const group = await loadGroup(params._id)
    const matches = await loadMatches(params._id)

    if (group) {
      return (
        <div>
          <GroupCardInfo />

          <div className="flex flex-col gap-6">
            <h1 className="font-bold mt-12 text-xl text-slate-800">
              Próximas Partidas
            </h1>

            {matches.map((match) => (
              <MatchCard
                key={match._id}
                matchData={match}
                userId={session.user.id}
              />
            ))}
          </div>

          <div className="flex flex-col gap-6">
            <h1 className="font-bold mt-12 text-xl text-slate-800">
              Jogadores Inscritos
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
