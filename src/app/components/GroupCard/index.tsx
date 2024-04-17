import { Group } from '@/app/types/entities/Group'

const emptyPicDefault =
  'https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg'

export type GroupCardProps = {
  groupData: Group
}

export async function GroupCard({ groupData }: GroupCardProps) {
  return (
    <div className="flex flex-col bg-white p-6 rounded-lg mt-6 custom-box-shadow cursor-pointer hover:bg-emerald-50">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-4">
          <img
            src={groupData.imageUrl || emptyPicDefault}
            alt="Logo do time"
            className="w-8 h-8 rounded-full"
          />
          <h4 className="font-bold text-sm text-slate-800">{groupData.name}</h4>
        </div>

        <div className="flex flex-col mt-4 gap-2 font-normal text-sm text-zinc-900">
          <p>Descrição: {groupData.description}</p>
          <p>
            Jogadores inscritos:{' '}
            {groupData.playerSubscriptions.length === 0
              ? 'Nenhum jogador inscrito'
              : groupData.playerSubscriptions.length}
          </p>
          <p>Criado em {groupData.createdAt.toString()}</p>
        </div>
      </div>
    </div>
  )
}
