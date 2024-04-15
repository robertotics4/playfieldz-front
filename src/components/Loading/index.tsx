export function Loading() {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-emerald-500"></div>
    </div>
  )
}
