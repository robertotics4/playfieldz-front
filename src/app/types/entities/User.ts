import { Player } from './Player'

export enum UserPermission {
  PLAYER = 'Player',
  ADMIN = 'Administrator',
  ROOT = 'Root',
}

export type UserRole = {
  groupId: string
  permission: UserPermission
}

export type User = {
  _id: string
  name: string
  phone: string
  roles: UserRole[]
  player?: Player | undefined
}
