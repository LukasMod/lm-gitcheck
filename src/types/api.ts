import { IRepo } from '.'
import { GeneralApiProblem } from '../services/api-problem'

export interface IReposApi {
  total_count: number
  incomplete_results: boolean
  items: IRepo[]
}

export type GetReposResult = { kind: 'ok'; repos: IRepo[]; total: number } | GeneralApiProblem
