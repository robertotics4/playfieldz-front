'use client'

import { useParams } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { GroupPlayer } from '@/app/components/GroupCard/GroupPlayer'
import { GroupService } from '@/app/services/groups/GroupService'
import { GroupCardInfo } from '@/app/components/GroupCard/GroupCardInfo'
import { PlayerSubscription } from '@/app/types/entities/Group'

const subscriptions = [
  {
    player: {
      _id: '66146b8467bc0755c63e811c',
      nickname: 'Caneta',
      age: 32,
      position: 'DM',
      userId: '66146b8367bc0755c63e811a',
      attributes: [
        {
          name: 'Defesa',
          value: 5,
          _id: '66146b8467bc0755c63e811d',
        },
        {
          name: 'Assistência',
          value: 5,
          _id: '66146b8467bc0755c63e811e',
        },
        {
          name: 'Drible',
          value: 5,
          _id: '66146b8467bc0755c63e811f',
        },
        {
          name: 'Chute',
          value: 5,
          _id: '66146b8467bc0755c63e8120',
        },
        {
          name: 'Habilidades',
          value: 5,
          _id: '66146b8467bc0755c63e8121',
        },
      ],
      createdAt: '2024-04-08T22:11:16.269Z',
      updatedAt: '2024-04-08T22:11:16.269Z',
      __v: 0,
    },
    paymentRecurrence: 'Mensalista',
    _id: '66216c27cbda5ebf59926b28',
  },
]

export default function GroupPage() {
  const params = useParams<{ _id: string }>()
  const session = useSession()
  const groupService = GroupService.getInstance()

  return (
    <div>
      <GroupCardInfo />

      <div className="flex flex-col gap-6">
        <h1 className="font-bold mt-12 text-xl text-slate-800">Jogadores</h1>

        {subscriptions.map((sub) => (
          <GroupPlayer
            key={sub._id}
            subscriptionData={sub as PlayerSubscription}
          />
        ))}
      </div>
    </div>
  )
}
