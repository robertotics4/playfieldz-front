export enum PlayerPosition {
  GK = 'Goleiro',
  CB = 'Zagueiro',
  FB = 'Lateral',
  DM = 'Volante',
  MF = 'MeioCampo',
  FW = 'Atacante',
}

export enum AttributeName {
  DEFENSE = 'Defesa',
  ASSISTING = 'Assistência',
  SHOOTING = 'Chute',
  DRIBBLING = 'Drible',
  SKILLS = 'Habilidades',
}

export type PlayerAttribute = {
  name: AttributeName
  value: number
}

export type Player = {
  _id: string
  nickname: string
  age: number
  position: PlayerPosition
  userId: string
  attributes: PlayerAttribute[]
  score?: number
}
