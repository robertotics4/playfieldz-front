import { Match } from '@/app/types/entities/Match'
import { api } from '../api'
import { FindMatchesFilter } from '@/app/types/filters/FindMatchesFilter'

export class MatchService {
  private static instance: MatchService

  public static getInstance(): MatchService {
    if (!MatchService.instance) {
      MatchService.instance = new MatchService()
    }
    return MatchService.instance
  }

  public async findMatches(
    token: string,
    filters: FindMatchesFilter,
  ): Promise<Match[]> {
    try {
      const response = await api.get<Match[]>('/matches', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: filters,
      })
      return response.data
    } catch (error) {
      console.error('Erro ao buscar partidas:', error)
      throw error
    }
  }
}
