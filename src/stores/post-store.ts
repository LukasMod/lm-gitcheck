import { makeObservable, observable, action, flow } from 'mobx'
import postApi from '../services/post-api'
import { GetPostsType, IBadge, IPost } from '../types'
import { INCREMENT_DATA } from '../utils'
import { delay } from '../utils/helpers'
import RootStore from './root-store'

const BADGES: IBadge[] = [
  { id: 'badge-1', label: 'Tablica' },
  { id: 'badge-2', label: 'Wydarzenia' },
  { id: 'badge-3', label: 'Artykuły' },
  { id: 'badge-4', label: 'Wiadomości' },
]

export default class PostStore {
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore

    makeObservable(this, {
      badges: observable,
      posts: observable,
      postsOffset: observable,
      postsTotal: observable,
      incrementPostsOffset: action,
      postLoading: observable,
      likeLoading: observable,
      resetPostsOffset: action,
      setPostLoading: action,
      setLikeLoading: action,
      setPosts: action,
      setBadgeSelected: action,
    })
  }

  rootStore: RootStore
  badges: IBadge[] = BADGES
  posts: IPost[] = []
  postsOffset = 0
  postsTotal = 0
  postLoading = false
  likeLoading: { id: string; isLoading: boolean } = null

  incrementPostsOffset = (limit: number) => {
    this.postsOffset = this.postsOffset + limit
  }

  resetPostsOffset = () => {
    this.postsOffset = 0
  }

  setPostLoading = (isLoading: boolean) => {
    this.postLoading = isLoading
  }

  setLikeLoading = (id: string, isLoading: boolean) => {
    this.likeLoading = { id, isLoading }
  }

  setPosts = (posts: IPost[]) => {
    this.posts = posts
  }

  setBadgeSelected = (id: string) => {
    const badge = this.badges.find(badge => badge.id === id)
    if (badge) {
      badge.isSelected = !badge.isSelected
    }
  }

  getPosts = flow(function* (this: PostStore, offset = 0, limit: number = INCREMENT_DATA) {
    try {
      if (this.postLoading) return

      if (offset > this.postsTotal) {
        console.log('reached getPosts total')
        return
      }

      this.setPostLoading(true)
      const response: GetPostsType = yield postApi.getPosts(offset, limit)

      this.postsTotal = response.total

      if (offset === 0) {
        this.resetPostsOffset()
        this.setPosts(response.data)
      } else {
        console.log('loaded more posts')
        this.setPosts([...this.posts, ...response.data])
      }

      this.incrementPostsOffset(limit)

      this.setPostLoading(false)
    } catch (e) {
      this.setPosts([])
      this.setPostLoading(false)
      console.log('getPosts', e.message)
    }
  }).bind(this)

  createPost = flow(function* (this: PostStore, post: IPost, callbackSuccess: () => void) {
    try {
      this.setPostLoading(true)
      // api call
      yield delay(1000)
      this.setPosts([...this.posts, post])

      this.setPostLoading(false)
      callbackSuccess()
    } catch (e) {
      this.setPostLoading(false)
      console.log('createPost', e.message)
    }
  }).bind(this)

  toggleLikePost = flow(function* (this: PostStore, postId: string) {
    try {
      if (this.likeLoading?.isLoading) return

      this.setLikeLoading(postId, true)
      // api call
      yield delay(500)
      const postToLike = this.posts.find(post => post.id === postId)
      if (postToLike) {
        postToLike.isLiked = !postToLike.isLiked
      }
      this.setLikeLoading(postId, false)
    } catch (e) {
      this.setLikeLoading(postId, false)
      console.log('createPost', e.message)
    }
  }).bind(this)
}
