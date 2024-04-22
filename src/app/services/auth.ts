import { api } from './api'

type SignInRequestData = {
  phone: string
  password: string
}

type SignInResponseData = {
  user: {
    id: string
    phone: string
  }
  token: string
  tokenExpirationInSeconds: number
  expiresIn: Date
}

export async function signInRequest(data: SignInRequestData) {
  const response = await api.post<SignInResponseData>('/auth/sign-in', data)

  const expiresInSeconds = response.data.tokenExpirationInSeconds
  const currentTime = new Date().getTime() / 1000
  const expirationTime = currentTime + expiresInSeconds

  response.data.expiresIn = new Date(expirationTime * 1000)

  return response.data
}
