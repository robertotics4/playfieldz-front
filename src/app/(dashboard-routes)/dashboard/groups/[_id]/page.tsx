'use client'

import { EMPTY_PICTURE_DEFAULT } from '@/app/support/constants'
import { useParams } from 'next/navigation'

export default function GroupPage() {
  const params = useParams<{ _id: string }>()

  return (
    <div className="flex flex-col items-center gap-2">
      <img
        src={EMPTY_PICTURE_DEFAULT}
        alt="Imagem do Grupo"
        className="h-40 w-40 rounded-full opacity-50 -z-10"
      />

      <h1 className="font-bold text-2xl -mt-12 text-emerald-800">
        FRC Resenha Futebol Club
      </h1>
      <p className="text-zinc-900">Toda quinta-feira às 20:30hrs</p>
      <p className="text-zinc-900">
        Criado por Roberto Oliveira / telefone: (98) 98204-5774
      </p>
      <p className="text-zinc-900">Criado em 16 de abril de 2024</p>
    </div>
  )
}
