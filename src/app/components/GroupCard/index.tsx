const emptyPicDefault =
  'https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg'

export async function GroupCard() {
  return (
    <div className="flex items-center justify-between divide-x-2 bg-white p-6 rounded-lg mt-6 custom-box-shadow">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-center gap-4">
          <img
            src={emptyPicDefault}
            alt="Logo do time"
            className="w-8 h-8 rounded-full"
          />
          <h4 className="font-bold text-sm text-slate-800">FRC Resenha</h4>
        </div>

        {/* <div className="flex flex-col mt-4 gap-2 font-normal text-sm text-zinc-900">
          <p>Criado por: Arena do Grêmio Vinhais</p>
          <p>Jogadores inscritos: {playerSubscriptions.length}</p>
        </div> */}
      </div>
    </div>
  )
}
