import { api } from './api';

export enum UserPermission {
  PLAYER = 'Player',
  ADMIN = 'Administrator',
  ROOT = 'Root',
}

type UserRole = {
  _id: string
  groupId: string;
  permission: UserPermission
}

type UserInformation = {
  _id: string;
  phone: string;
  roles: [UserRole];
  createdAt: Date;
  updatedAt: Date;
}


export async function recoverUserInformation(token: string) {
  const response = await api.get<UserInformation>('/users/info')

  return response.data
}