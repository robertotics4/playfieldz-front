'use client'

import { MatchService } from '@/app/services/matches/MatchService'
import { Loading } from '@/components/Loading'
import { useEffect, useState } from 'react'
import { FaCheck, FaRegClock } from 'react-icons/fa'

interface PlayerConfirmationProps {
  isConfirmed: boolean
  authToken: string
  matchId: string
}

export function PlayerConfirmationButton({
  isConfirmed,
  authToken,
  matchId,
}: PlayerConfirmationProps) {
  const [confirmation, setConfirmation] = useState(isConfirmed)
  const [loading, setLoading] = useState(false)
  const matchService = MatchService.getInstance(authToken)

  useEffect(() => {}, [confirmation])

  async function toggleConfirmation(matchId: string) {
    try {
      setLoading(true)

      await matchService.updatePlayerPresence(matchId, !confirmation)

      setConfirmation(!confirmation)
    } catch (error) {
      console.log('[APP_ERROR]: ', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    // TODO transformar loadin em hook
    <>
      {loading && <Loading />}
      <button
        type="button"
        onClick={() => toggleConfirmation(matchId)}
        className={`flex items-center gap-2 mt-4 p-3 rounded-xl cursor-pointer text-white font-bold ${confirmation ? 'bg-emerald-800' : 'bg-zinc-500'}`}
      >
        {confirmation ? (
          <>
            Confirmado <FaCheck className="text-white text-xl" />
          </>
        ) : (
          <>
            Aguardando <FaRegClock className="text-white text-xl" />
          </>
        )}
      </button>
    </>
  )
}
