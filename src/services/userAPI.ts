import {
  AddressItemRes,
  AddressRes,
  ChangePasswordParams,
  DistrictId,
  HTTPResponse,
  Login,
  LoginRes,
  StateId,
  UpdateUserAddress,
  UpdateUserInfo,
  UserDetailRes,
} from '@/types'
import { axiosClient } from './axiosInstance'

const userAPI = {
  login: (params: Login): Promise<HTTPResponse<LoginRes>> => {
    return axiosClient.post('/api/v2.0/auth/login', params)
  },

  getDetailUser: (token?: string): Promise<HTTPResponse<UserDetailRes>> => {
    let config = {}
    if (token) {
      config = { headers: { 'access-token': token } }
    }
    return axiosClient.get('/api/v2.0/user_detail', config)
  },

  updateUserInfo: (params: UpdateUserInfo): Promise<HTTPResponse<UserDetailRes>> => {
    return axiosClient.post('/api/v2.0/update_ship_infomation', params)
  },

  updateUserAddress: (params: UpdateUserAddress): Promise<HTTPResponse<AddressRes>> => {
    return axiosClient.post('/api/v2.0/update_ship_address', params)
  },

  getAddress: (
    params?: StateId | DistrictId
  ): Promise<HTTPResponse<{ data_adress: AddressItemRes[] }>> => {
    return axiosClient.get('/api/v2.0/get_adress', { params })
  },

  changePassword: (params: ChangePasswordParams): Promise<HTTPResponse<any>> => {
    return axiosClient.post('/api/v2.0/post_change_password', {
      params: params,
    })
  },
}

export { userAPI }
