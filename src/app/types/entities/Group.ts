import { Player } from './Player'
import { User } from './User'

export enum PlayerPaymentRecurrence {
  DAILY = 'Diarista',
  MONTHLY = 'Mensalista',
}

export type PlayerSubscription = {
  player: Player
  paymentRecurrence: PlayerPaymentRecurrence
}

export type Group = {
  _id: string
  name: string
  createdBy: User
  playerSubscriptions: PlayerSubscription[]
  description?: string
  imageUrl?: string
  createdAt: Date
}
