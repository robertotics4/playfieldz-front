import { Loading } from '@/components/Loading'
import { createContext, useContext, useState } from 'react'

interface LoadingContextData {
  isLoading: boolean
  setLoading(value: boolean): void
}

type LoadingProviderProps = {
  children: React.ReactNode
}

const LoadingContext = createContext<LoadingContextData>(
  {} as LoadingContextData,
)

function LoadingProvider({ children }: LoadingProviderProps) {
  const [isLoading, setLoading] = useState(false)

  return (
    <LoadingContext.Provider value={{ isLoading, setLoading }}>
      {children}
      {isLoading && <Loading />}
    </LoadingContext.Provider>
  )
}

function useLoading(): LoadingContextData {
  const context = useContext(LoadingContext)

  if (!context) {
    throw new Error('useLoading must be user within a LoadingProvider')
  }

  return context
}

export { LoadingProvider, useLoading }
