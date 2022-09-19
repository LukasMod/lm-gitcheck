import { makeObservable, observable, action, flow } from 'mobx'
import repoApi from '../services/repo-api'
import { GetReposResult, IRepo } from '../types'
import RootStore from './root-store'

export default class RepoStore {
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
      setReposTotal: action,
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

  setReposTotal = (total: number) => {
    this.reposTotal = total
  }

  getRepos = flow(function* (this: RepoStore, searchText: string, page: number, perPage?: number) {
    try {
      if (this.repoLoading) return

      // if (offset > this.reposTotal) {
      //   console.log('reached getRepos total')
      //   return
      // }

      this.setRepoLoading(true)
      const response: GetReposResult = yield repoApi.getRepos(searchText, page, perPage)
      if (response.kind !== 'ok') throw Error(response.kind)

      this.setReposTotal(response.total)
      // this.setRepos([...this.repos, ...response.repos])
      this.setRepos([...response.repos])

      // if (offset === 0) {
      //   this.resetReposOffset()
      //   this.setRepos(response.data)
      // } else {
      //   console.log('loaded more repos')
      //   this.setRepos([...this.repos, ...response.data])
      // }

      // this.incrementReposOffset(limit)

      this.setRepoLoading(false)
    } catch (e) {
      this.setRepos([])
      this.setRepoLoading(false)
      console.log('getRepos', e.message)
    }
  }).bind(this)
}
