import { EMPTY_PICTURE_DEFAULT } from '@/app/support/constants'
import { PlayerSubscription } from '@/app/types/entities/Group'
import { FaStar } from 'react-icons/fa'

type GroupPlayerProps = {
  subscriptionData: PlayerSubscription
}

export function GroupPlayer({ subscriptionData }: GroupPlayerProps) {
  const { paymentRecurrence } = subscriptionData
  const { nickname, age, position } = subscriptionData.player

  return (
    <div className="flex gap-4 items-center bg-white p-4 rounded-xl custom-box-shadow">
      <img
        src={EMPTY_PICTURE_DEFAULT}
        alt="Imagem do Jogador"
        className="h-16 w-16 rounded-full"
      />

      <div className="flex flex-col gap-2">
        <p className="font-bold text-base text-slate-800">
          {nickname}, {age} anos
        </p>

        <div className="flex items-center gap-2">
          <FaStar className="text-yellow-500" />
          <span className="text-sm text-zinc-500">5.0</span>
          <span className="text-sm text-emerald-800">
            {paymentRecurrence.toUpperCase()}
          </span>
        </div>

        <div className="flex gap-4 text-sm">
          <span className="text-zinc-500">Posição:</span>
          <span>{position}</span>
        </div>
      </div>
    </div>
  )
}
