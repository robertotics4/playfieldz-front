import { EMPTY_PICTURE_DEFAULT } from '@/app/support/constants'
import { Group } from '@/app/types/entities/Group'
import { format } from 'date-fns/format'
import { ptBR } from 'date-fns/locale'
import Link from 'next/link'

export type GroupCardProps = {
  groupData: Group
}

export async function GroupCard({ groupData }: GroupCardProps) {
  function formatDatetime(datetime: Date) {
    return format(datetime, "dd 'de' MMMM 'de' yyyy 'às' HH:mm", {
      locale: ptBR,
    })
  }

  return (
    <Link
      href={`/dashboard/groups/${groupData._id}`}
      className="flex flex-col bg-white border-2 border-white p-6 rounded-lg mt-6 custom-box-shadow cursor-pointer hover:border-emerald-600 hover:transition-colors"
    >
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-4">
          <img
            src={groupData.imageUrl || EMPTY_PICTURE_DEFAULT}
            alt="Logo do time"
            className="w-8 h-8 rounded-full"
          />
          <h4 className="font-bold text-base text-slate-800">
            {groupData.name}
          </h4>
        </div>

        <div className="flex flex-col mt-4 gap-2 font-normal text-sm text-zinc-900">
          <p>Descrição: {groupData.description}</p>
          <p>
            Jogadores inscritos:{' '}
            {groupData.playerSubscriptions.length === 0
              ? 'Nenhum jogador inscrito'
              : groupData.playerSubscriptions.length}
          </p>
          <p className="mt-4 text-zinc-500">
            Criado em {formatDatetime(groupData.createdAt)}
          </p>
        </div>
      </div>
    </Link>
  )
}
