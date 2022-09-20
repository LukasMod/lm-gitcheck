import { ApiResponse } from 'apisauce'
import { Api } from '.'
import { GetReposResult, IReposApi } from '../types'
import { INCREMENT_DATA } from '../utils'
import { getGeneralApiProblem } from './api-problem'

class RepoApi {
  async getRepos(searchText: string, page: number): Promise<GetReposResult> {
    try {
      const response: ApiResponse<IReposApi> = await Api.apisauce.get('/search/repositories', {
        q: searchText,
        page,
        per_page: INCREMENT_DATA,
      })

      if (!response.ok) {
        const problem = getGeneralApiProblem(response)
        if (problem) {
          throw problem
        }
      }
      return { kind: 'ok', repos: response?.data?.items, total: response?.data?.total_count }
    } catch (e) {
      throw Error(e.kind)
    }
  }
}

export default new RepoApi()
