export type ArticleDataType = {
  id: string
  name: string
  content: string
  video_link: string
  photo: string
}

export type RegisterDataType = {
  message: string
  token: string
}

export type UserDataType = {
  id: any
  role_id: number
  role_name: string
  name: string
  surname: string
  patronymic: string
  login: string
  date_ofbirth: string
  awards: string[]
  photo: string
  gender: string
  document: string[]
}

export type ContestDataType = {
  volonteers_to_verify: number[]
  volonteers: number[]
  id: string
  photo: string
  name: string
  is_online: boolean
  place_id: string
  type_of_sport: string
  description: string
  org: string
}

export type RatingDataType = {
  id: string
  photo: string
  name: string
  contest_id: string
  user_id: string
  video_link: string
  is_verified: boolean
  score: string
}