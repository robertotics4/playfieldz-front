import { FaCheck, FaRegClock } from 'react-icons/fa'

interface PlayerConfirmationProps {
  isConfirmed: boolean
}

export function PlayerConfirmationButton({
  isConfirmed,
}: PlayerConfirmationProps) {
  return (
    <button
      type="button"
      className={`flex items-center gap-2 mt-4 p-3 rounded-xl cursor-pointer text-white font-bold ${isConfirmed ? 'bg-emerald-800' : 'bg-zinc-500'}`}
    >
      {isConfirmed ? (
        <>
          Confirmado <FaCheck className="text-white text-xl" />
        </>
      ) : (
        <>
          Aguardando <FaRegClock className="text-white text-xl" />
        </>
      )}
    </button>
  )
}
