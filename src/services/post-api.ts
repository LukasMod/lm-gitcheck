import postsMock from '../mocks/posts.json'
import { GetPostsType } from '../types'
import { delay, paginate } from '../utils/helpers'

class PostApi {
  async getPosts(offset: number, limit?: number): Promise<GetPostsType> {
    try {
      // api call
      await delay(500)
      const response: GetPostsType = {
        data: paginate(postsMock, offset, limit),
        total: postsMock.length,
      }

      return response
    } catch (e) {
      throw Error(e)
    }
  }
}

export default new PostApi()
