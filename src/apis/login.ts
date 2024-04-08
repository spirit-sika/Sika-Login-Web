import type { BaseResponse, ChaptchaEntity, LoginDTO } from '@/types/Interface'
import request from '@/utils/request'

export const getChaptchaAPI = (codeKey?:string):Promise<BaseResponse<ChaptchaEntity>> => {
  return request({
    url: 'api/user/captcha',
    method: 'GET',
    params:{
      codeKey
    }
  })
}

export const doLoginAPI = (data: LoginDTO):Promise<BaseResponse<string>> => {
  return request({
    url: 'api/user/login',
    method: 'POST',
    data: data
  })
}

