import { Group } from '@/app/types/entities/Group'
import { api } from '../api'
import { FindGroupsFilters } from '@/app/types/filters/FindGroupsFilter'

export class GroupService {
  private static instance: GroupService
  private static token: string

  public static getInstance(token: string): GroupService {
    if (!GroupService.instance) {
      GroupService.instance = new GroupService()
      GroupService.token = token
    }
    return GroupService.instance
  }

  public async findGroups(filters: FindGroupsFilters): Promise<Group[]> {
    try {
      const response = await api.get<Group[]>('/groups', {
        headers: {
          Authorization: `Bearer ${GroupService.token}`,
        },
        params: filters,
      })
      return response.data
    } catch (error) {
      console.error('Erro ao buscar grupos:', error)
      throw error
    }
  }
}
