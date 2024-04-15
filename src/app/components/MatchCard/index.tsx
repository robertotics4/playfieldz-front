const emptyPicDefault =
  'https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg'

export function MatchCard() {
  return (
    <div className="flex items-center justify-between divide-x-2 bg-white p-6 rounded-lg mt-6 custom-box-shadow">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-center gap-4">
          <img
            src={emptyPicDefault}
            alt="Logo do time"
            className="w-8 h-8 rounded-full"
          />
          <h4 className="font-bold text-sm text-slate-800">
            FRC Resenha Futebol Club
          </h4>
        </div>

        <div className="flex flex-col mt-4 gap-2 font-normal text-sm text-zinc-900">
          <p>Local: Arena do Grêmio Vinhais</p>
          <p>Jogadores inscritos: 40</p>
          <p>Times formados: 5</p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center pl-10">
        <span className="font-normal text-lg text-zinc-900">Sexta, 10/04</span>
        <span className="font-bold text-4xl text-slate-800">20:30</span>
      </div>
    </div>
  )
}
