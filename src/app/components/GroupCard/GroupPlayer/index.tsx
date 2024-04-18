import { EMPTY_PICTURE_DEFAULT } from '@/app/support/constants'
import {
  PlayerPaymentRecurrence,
  PlayerSubscription,
} from '@/app/types/entities/Group'

type GroupPlayerProps = {
  subscriptionData: PlayerSubscription
}

export function GroupPlayer({ subscriptionData }: GroupPlayerProps) {
  const { paymentRecurrence } = subscriptionData
  const { nickname, age, position, attributes } = subscriptionData.player

  return (
    <div className="flex gap-4 items-center">
      <img
        src={EMPTY_PICTURE_DEFAULT}
        alt="Imagem do Jogador"
        className="h-16 w-16 rounded-full"
      />

      <div className="flex flex-col gap-2">
        <p className="font-bold text-normal text-slate-800">
          {nickname}, {age} anos, {position.toString()} ({position.toString()})
        </p>

        <p className="text-zinc-500">
          {attributes.map((att, index) => {
            if (index === 0) return `${att.name}: ${att.value}`

            return ` - ${att.name}: ${att.value}`
          })}
        </p>
      </div>

      <div className="ml-auto flex flex-col items-center">
        <span className="font-bold text-xl text-emerald-800">5.0</span>
        <span className="font-bold text-xl text-emerald-800">
          {paymentRecurrence === PlayerPaymentRecurrence.MONTHLY ? 'M' : 'D'}
        </span>
      </div>
    </div>
  )
}
