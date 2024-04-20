import { EMPTY_PICTURE_DEFAULT } from '@/app/support/constants'
import { Group } from '@/app/types/entities/Group'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface GroupHeaderProps {
  groupData: Group
}

export function GroupHeader({ groupData }: GroupHeaderProps) {
  function formatDate(datetime: Date): string {
    return format(datetime, "d 'de' MMMM 'de' yyyy", { locale: ptBR })
  }

  function formatPhone(phone: string): string {
    const phoneNumbers = phone.replace(/\D/g, '')

    const regex = /^(\d{2})(\d{5})(\d{4})$/
    return phoneNumbers.replace(regex, '($1) $2-$3')
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <img
        src={groupData.imageUrl || EMPTY_PICTURE_DEFAULT}
        alt="Imagem do Grupo"
        className="h-40 w-40 rounded-full opacity-50 -z-10"
      />

      <h1 className="font-bold text-2xl -mt-12 text-emerald-800">
        {groupData.name}
      </h1>
      <p className="text-zinc-900">
        {groupData.description || 'Sem descrição'}
      </p>
      <p className="text-sm text-zinc-900">
        Criado por {groupData.createdBy.name}
      </p>
      <p className="text-sm text-zinc-900">
        Desde {formatDate(groupData.createdAt)}
      </p>
      <p className="text-sm text-zinc-900">
        Contato: {formatPhone(groupData.createdBy.phone)}
      </p>
    </div>
  )
}
