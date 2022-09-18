/**
 * A sleep statement.
 *
 * @param ms The number of milliseconds to wait.
 */
export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const paginate = (array: any[], offset: number, limit: number) => {
  return array.slice(offset, offset + limit)
}
