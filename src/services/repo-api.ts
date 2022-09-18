import { GetReposType } from '../types'
import { delay, paginate } from '../utils/helpers'

class RepoApi {
  async getRepos(offset: number, limit?: number): Promise<GetReposType> {
    try {
      // api call
      await delay(500)
      const response: GetReposType = {
        data: [],
        total: 0,
      }

      return response
    } catch (e) {
      throw Error(e)
    }
  }
}

export default new RepoApi()
