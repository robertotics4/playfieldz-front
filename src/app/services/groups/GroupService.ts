import { Group } from '@/app/types/entities/Group'
import { api } from '../api'
import { FindGroupsFilters } from '@/app/types/filters/FindGroupsFilter'

export class GroupService {
  private static instance: GroupService

  public static getInstance(): GroupService {
    if (!GroupService.instance) {
      GroupService.instance = new GroupService()
    }
    return GroupService.instance
  }

  public async findGroups(
    token: string,
    filters: FindGroupsFilters,
  ): Promise<Group[]> {
    try {
      const response = await api.get<Group[]>('/groups', {
        headers: {
          Authorization: `Bearer ${token}`,
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
