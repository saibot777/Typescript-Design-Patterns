export const consts = {
  api_v1: "https://example:2344"
}

export interface HttpClient<T> {
  // some http library
  post(url: string, payload: T): Promise<void>
  get(url: string): Promise<T[]>
}