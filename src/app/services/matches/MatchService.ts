import { Match } from '@/app/types/entities/Match'
import { api } from '../api'
import { FindMatchesFilter } from '@/app/types/filters/FindMatchesFilter'

export class MatchService {
  private static instance: MatchService
  private static token: string

  public static getInstance(token: string): MatchService {
    if (!MatchService.instance) {
      MatchService.instance = new MatchService()
      MatchService.token = token
    }
    return MatchService.instance
  }

  public async findMatches(filters: FindMatchesFilter): Promise<Match[]> {
    try {
      const response = await api.get<Match[]>('/matches', {
        headers: {
          Authorization: `Bearer ${MatchService.token}`,
        },
        params: filters,
      })
      return response.data
    } catch (error) {
      console.error('Erro ao buscar partidas:', error)
      throw error
    }
  }

  public async confirmPlayerPresence(matchId: string): Promise<void> {
    try {
      await api.post<Match[]>(`/matches/${matchId}`, {
        headers: {
          Authorization: `Bearer ${MatchService.token}`,
        },
      })
    } catch (error) {
      console.error('Erro ao buscar partidas:', error)
      throw error
    }
  }
}
