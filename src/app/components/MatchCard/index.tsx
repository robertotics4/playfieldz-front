import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Match } from '@/app/types/entities/Match'
import { PlayerConfirmationButton } from './PlayerConfirmationButton'

interface MatchCardProps {
  matchData: Match
  userId: string
}

export function MatchCard({ matchData, userId }: MatchCardProps) {
  function formatDate(datetime: Date): string {
    return format(datetime, "EEEE, d 'de' MMMM", {
      locale: ptBR,
    })
  }

  function formatTime(datetime: Date): string {
    return format(datetime, 'HH:mm')
  }

  if (matchData) {
    const player = matchData.matchPlayers.find(
      (player) => player.userId === userId,
    )

    return (
      <div
        key={matchData._id}
        className="flex items-center justify-between divide-x-2 bg-white rounded-xl text-sm text-zinc-500 custom-box-shadow"
      >
        <div className="flex p-4 w-full flex-col">
          <p>Limite da pelada: {matchData.maxPlayerLimit}</p>
          <p>Limite por time: {matchData.playersPerTeam}</p>
          <p>Confirmados: {matchData.matchPlayers.length}</p>

          <div className="flex items-center justify-center">
            <PlayerConfirmationButton isConfirmed={!!player} />
          </div>
        </div>

        <div className="flex flex-col items-center p-4">
          <span className="font-normal text-base text-slate-800">
            {formatDate(matchData.schedulling)}
          </span>
          <span className="font-bold text-2xl text-slate-800">
            {formatTime(matchData.schedulling)}
          </span>
        </div>
      </div>
    )
  }
}
