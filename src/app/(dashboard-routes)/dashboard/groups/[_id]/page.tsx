'use client'

import { GroupCardInfo } from '@/app/components/GroupCard/GroupCardInfo'
import { useParams } from 'next/navigation'
import { GroupPlayer } from '@/app/components/GroupCard/GroupPlayer'

export default function GroupPage() {
  const params = useParams<{ _id: string }>()

  return (
    <div>
      <GroupCardInfo />

      <div className="flex flex-col gap-6">
        <h1 className="font-bold mt-12 text-xl text-slate-800">Jogadores</h1>

        <GroupPlayer />
        <GroupPlayer />
        <GroupPlayer />
        <GroupPlayer />
        <GroupPlayer />
        <GroupPlayer />
        <GroupPlayer />
        <GroupPlayer />
        <GroupPlayer />
      </div>
    </div>
  )
}
