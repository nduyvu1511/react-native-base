import { CONFIG } from '@/constants'
import axios from 'axios'
import { useUserInfoSlice } from '../store'

export const axiosClient = axios.create({
  baseURL: CONFIG.apiUrl,
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

axiosClient.interceptors.request.use(async (config) => {
  if (config?.headers) {
    const token = useUserInfoSlice.getState()?.token
    if (token) {
      config.headers['access-token'] = token as string
    }
  }

  return config
})

axiosClient.interceptors.response.use(
  (response) => {
    if (response?.data) {
      return response.data
    }
    return response
  },
  (err) => {
    throw err
  }
)
