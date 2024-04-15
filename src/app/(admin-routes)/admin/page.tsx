import { MatchCard } from '@/app/components/MatchCard'

export default async function Admin() {
  return (
    <main className="flex flex-col">
      <div className="mt-12">
        <h1 className="font-bold text-xl text-slate-800">Partidas</h1>
        <MatchCard />
      </div>
    </main>
  )
}
