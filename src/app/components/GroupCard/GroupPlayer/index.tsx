import { EMPTY_PICTURE_DEFAULT } from '@/app/support/constants'

export function GroupPlayer() {
  return (
    <div className="flex gap-4 items-center">
      <img
        src={EMPTY_PICTURE_DEFAULT}
        alt="Imagem do Jogador"
        className="h-16 w-16 rounded-full"
      />

      <div className="flex flex-col gap-2">
        <p className="font-bold text-normal text-slate-800">
          Caneta, 32 anos, Volante (DM)
        </p>

        <p className="text-zinc-500">
          Def: 5 / Ass: 5 / Drib: 5 / Chute: 5 / Hab: 5
        </p>
      </div>

      <div className="ml-auto flex flex-col items-center">
        <span className="font-bold text-xl text-emerald-800">5.0</span>
        <span className="font-bold text-xl text-emerald-800">M</span>
      </div>
    </div>
  )
}
