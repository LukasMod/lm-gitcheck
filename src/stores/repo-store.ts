import { makeObservable, observable, action, flow } from 'mobx'
import repoApi from '../services/repo-api'
import { GetReposType, IRepo } from '../types'
import { INCREMENT_DATA } from '../utils'
import RootStore from './root-store'

export default class PostStore {
  rootStore: RootStore
  repos: IRepo[] = []
  reposOffset = 0
  reposTotal = 0
  repoLoading = false

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore

    makeObservable(this, {
      repos: observable,
      reposOffset: observable,
      reposTotal: observable,
      repoLoading: observable,

      incrementReposOffset: action,
      resetReposOffset: action,
      setRepoLoading: action,
      setRepos: action,
    })
  }

  incrementReposOffset = (limit: number) => {
    this.reposOffset = this.reposOffset + limit
  }

  resetReposOffset = () => {
    this.reposOffset = 0
  }

  setRepoLoading = (isLoading: boolean) => {
    this.repoLoading = isLoading
  }

  setRepos = (repos: IRepo[]) => {
    this.repos = repos
  }

  getRepos = flow(function* (this: PostStore, offset = 0, limit: number = INCREMENT_DATA) {
    try {
      if (this.repoLoading) return

      if (offset > this.reposTotal) {
        console.log('reached getRepos total')
        return
      }

      this.setRepoLoading(true)
      const response: GetReposType = yield repoApi.getRepos(offset, limit)

      this.reposTotal = response.total

      if (offset === 0) {
        this.resetReposOffset()
        this.setRepos(response.data)
      } else {
        console.log('loaded more repos')
        this.setRepos([...this.repos, ...response.data])
      }

      this.incrementReposOffset(limit)

      this.setRepoLoading(false)
    } catch (e) {
      this.setRepos([])
      this.setRepoLoading(false)
      console.log('getPosts', e.message)
    }
  }).bind(this)
}
