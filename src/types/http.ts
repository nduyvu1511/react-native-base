import { KeyedMutator } from 'swr'

export type HTTPResponse<T> = {
  count?: number
  status: boolean
  code?: number
  message?: string
  data: T
}

export interface HTTPConfig {
  showBackdrop?: boolean
  errorMsg?: string
  successMsg?: string
  showErrorMsg?: boolean
  showSuccessMsg?: boolean
  requiredToken?: boolean
  method?: 'GET' | 'POST'
}

export interface AsyncHandler<Response> {
  fetcher: Promise<HTTPResponse<Response>>
  onSuccess?: (params: Response) => void
  onError?: (data: any) => void
  config?: HTTPConfig
}

export interface AsyncHandlerParams<Params, Response> {
  params: Params
  onError?: (data: any) => void
  onSuccess?: (params: Response) => void
  config?: HTTPConfig
}

export type AsyncHandlerNoFetcher<T> = Omit<AsyncHandler<T>, 'fetcher'>

export type QueryListFunction<T, V> = QueryListFetchMoreFunction<T> & {
  params: V
}

export type QueryListFetchMoreFunction<T> = {
  onError?: Function
  onSuccess?: (_: T[]) => void
}

export interface UseQueryListRes<T, V extends QueryList> {
  isValidating: boolean
  hasMore: boolean
  isFetchingMore: boolean
  offset: number
  data: T[] | undefined
  error: any
  isFirstLoading: boolean
  params: V | undefined
  mutate: KeyedMutator<any>
  fetchMore: (_?: QueryListFetchMoreFunction<T>) => Promise<void>
  filter: (_: QueryListFunction<T, V>) => Promise<void>
  refresh: () => void
}

export interface QueryList {
  limit?: number
  offset?: number
}
