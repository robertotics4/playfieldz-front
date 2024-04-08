import { api } from './api';

type SignInRequestData = {
  phone: string;
  password: string;
}

type SignInResponseData = {
  user: {
    id: string,
    phone: string
  },
  token: string,
  tokenExpirationInSeconds: number
}

export async function signInRequest(data: SignInRequestData) {
  const response = await api.post<SignInResponseData>('/auth/sign-in', data)

  return response.data
}