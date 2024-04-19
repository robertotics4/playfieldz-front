import { Group } from './Group'
import { Player } from './Player'

export type Location = {
  latitude: string
  longitude: string
}

export type Match = {
  _id: string
  schedulling: Date
  maxPlayerLimit: number
  playersPerTeam: number
  group: Group
  matchPlayers: Player[]
  location?: Location
}
