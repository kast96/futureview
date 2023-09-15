export type ItemType = {
  title: string
  category: 'films' | 'series' | 'games'
  image?: string
  isViewed: boolean
}

export type ItemTypeResponse = ItemType & {
  _id: number
}

export type ResponseType<T> = {
  data: T
  error: boolean
  message?: string
}