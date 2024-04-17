import { UserRole } from '../types/entities/User'
import { api } from './api'

type UserInformation = {
  _id: string
  phone: string
  roles: [UserRole]
  createdAt: Date
  updatedAt: Date
}

export async function recoverUserInformation(token: string) {
  const response = await api.get<UserInformation>('/users/info', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return response.data
}
