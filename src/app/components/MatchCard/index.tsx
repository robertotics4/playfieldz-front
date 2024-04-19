import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Match } from '@/app/types/entities/Match'

interface MatchCardProps {
  matchData: Match
}

export function MatchCard({ matchData }: MatchCardProps) {
  function formatDate(datetime: Date): string {
    return format(datetime, "EEEE, d 'de' MMMM", {
      locale: ptBR,
    })
  }

  function formatTime(datetime: Date): string {
    return format(datetime, 'HH:mm')
  }

  return (
    <div
      key={matchData._id}
      className="flex items-center justify-between divide-x-2 p-4 bg-white rounded-xl text-sm text-zinc-500 custom-box-shadow"
    >
      <div className="flex flex-col">
        <p>Limite de jogadores: {matchData.maxPlayerLimit}</p>
        <p>Jogadores por time: {matchData.playersPerTeam}</p>
        <p>Jogadores confirmados: {matchData.matchPlayers.length}</p>
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
