import { createContext, useContext, useState } from 'react'

interface AuthContextData {
  token?: string
  setToken(token: string): void
}

type AuthProviderProps = {
  children: React.ReactNode
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

function AuthProvider({ children }: AuthProviderProps) {
  const [token, setToken] = useState<string | undefined>(undefined)

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be user within a AuthProvider')
  }

  return context
}

export { AuthProvider, useAuth }
