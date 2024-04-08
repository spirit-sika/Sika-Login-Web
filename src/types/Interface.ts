export interface BaseResponse<T> {
  code: number
  message: string
  value: T
}

export interface LoginDTO{
  username?: string
  password?: string
  rememberMe?: boolean
  codeKey?: string
  code?: string
}
export interface ChaptchaEntity {
  codeKey?: string,
  base64?: string
}