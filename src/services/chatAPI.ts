import { CONFIG } from '@/constants'
import {
  changeUserStatusParams,
  ChatAxiosResponse,
  CreateGroupChat,
  CreateSingleChat,
  CreateUserParams,
  GetTokenParams,
  LikeMessage,
  LoginChatFormParams,
  MessageUnreadCountRes,
  QueryList,
  SendMessage,
  TokenRes,
  UpdateProfile,
  UpdateRoomInfo,
  UserRes,
} from '@/types'
import axios, { AxiosResponse } from 'axios'

const axiosClient = axios.create({
  baseURL: `${CONFIG.chatApiUrl}/api`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

axiosClient.interceptors.request.use(async (config) => {
  return config
})

try {
  axiosClient.interceptors.response.use(
    async (response) => {
      // if (response?.data?.status_code === 401 || response?.data?.status_code === 403) {
      //   const res: any = await memoizedRefreshToken()

      //   if (res?.success) {
      //     return response.data
      //   } else {
      //     store.dispatch(setProfile(undefined))
      //   }
      // }

      if (response?.data) {
        return response.data
      }
      return response
    },
    (err) => {
      throw err
    }
  )
} catch (error) {
  console.log(error)
}

const chatAPI = {
  createUser: (params: CreateUserParams): Promise<ChatAxiosResponse<UserRes>> => {
    return axiosClient.post('/chat/user', params)
  },

  updateUser: (params: UpdateProfile): Promise<ChatAxiosResponse<UserRes>> => {
    return axiosClient.patch('/chat/user/profile', params)
  },

  generateToken: (params: GetTokenParams): Promise<ChatAxiosResponse<TokenRes>> => {
    return axiosClient.post('/chat/user/generate_token', params)
  },

  createSingleChat: (params: Omit<CreateSingleChat, 'state'>) => {
    return axiosClient.post('/chat/room/single', params)
  },

  createGroupChat: (params: CreateGroupChat) => {
    return axiosClient.post('/chat/room/group', params)
  },

  getProfile: (id?: string) => {
    return axiosClient.get(`/chat/user/profile${id ? `?user_id=${id}` : ''}`)
  },

  getMessageUnreadCount: (): Promise<AxiosResponse<MessageUnreadCountRes>> => {
    return axiosClient.get('/chat/user/message_unread_count')
  },

  getRoomList: ({ limit = 30, offset = 0, search_term }: QueryList & { search_term?: string }) => {
    return axiosClient.get(
      `/chat/room?limit=${limit}&offset=${offset}${
        search_term ? `&search_term=${search_term}` : ''
      }`
    )
  },

  getRoomDetail: (roomId: string) => {
    return axiosClient.get(`/chat/room/${roomId}`)
  },

  getMessagesPinnedInRoom: ({
    limit = 30,
    offset = 0,
    room_id,
  }: QueryList & { room_id: string }) => {
    return axiosClient.get(`/chat/room/${room_id}/messages_pinned?limit=${limit}&offset=${offset}`)
  },

  getMessagesInRoom: ({ limit = 30, offset = 0, room_id }: QueryList & { room_id: string }) => {
    return axiosClient.get(`/chat/room/${room_id}/messages?limit=${limit}&offset=${offset}`)
  },

  getMembersInRoom: ({ limit = 30, offset = 0, room_id }: QueryList & { room_id: string }) => {
    return axiosClient.get(`/chat/room/${room_id}/members?limit=${limit}&offset=${offset}`)
  },

  sendMessage: (params: SendMessage) => {
    return axiosClient.post('/chat/message', params)
  },

  getMessageById: (msgId: string) => {
    return axiosClient.get(`/chat/message/${msgId}`)
  },

  getTagMessageList: ({ limit = 30, offset = 0 }: QueryList) => {
    return axiosClient.get(`/chat/tag?limit=${limit}&offset=${offset}`)
  },

  changeUserStatus: (params: changeUserStatusParams) => {
    return axiosClient.patch('/chat/status', params)
  },
  getUserData: () => {
    return axiosClient.get('/chat/user')
  },

  softDeleteRoomByCompoundingCarId: (
    compounding_car_id: number
  ): Promise<ChatAxiosResponse<{ compounding_car_id: number }>> => {
    return axiosClient.delete(`/chat/room/compounding_car_id/${compounding_car_id}`)
  },

  restoreRoom: (room_id: string) => {
    return axiosClient.post(`/chat/room/restore/${room_id}`)
  },

  // addMessageUnreadToRoom: (params: AddMessageUnread) => {
  //   return axiosClient.post("/chat/room/message_unread", params)
  // },

  // clearMessageUnreadFromRoom: (roomId: string) => {
  //   return axiosClient.delete(`/chat/room/${roomId}/message_unread`)
  // },

  // confirmReadMessage: (message_id: string) => {
  //   return axiosClient.patch(`/chat/message/read`, { message_id })
  // },

  confirmReadAllMessageInRoom: (room_id: string) => {
    return axiosClient.patch(`/chat/message/read_all`, { room_id })
  },

  login: (params: LoginChatFormParams) => {
    return axiosClient.post(`/chat/user/login`, params)
  },

  logout: () => {
    return axiosClient.post(`/chat/user/logout`)
  },

  refreshToken: () => {
    return axiosClient.post(`/chat/user/refresh`)
  },

  likeMessage: (params: LikeMessage) => {
    return axiosClient.post(`/chat/message/like`, params)
  },

  unlikeMessage: (messageId: string) => {
    return axiosClient.delete(`/chat/message/unlike/${messageId}`)
  },

  getUsersLikedMessage: (messageId: string) => {
    return axiosClient.get(`/chat/message/users/like/${messageId}`)
  },

  getUsersReadMessage: (messageId: string) => {
    return axiosClient.get(`/chat/message/users/read/${messageId}`)
  },

  uploadSingleImage: (formData: FormData) => {
    return axiosClient.post(`/chat/attachment/image/single`, formData)
  },

  uploadMultipleImage: (formData: FormData) => {
    return axiosClient.post(`/chat/attachment/image/multiple`, formData)
  },

  uploadMultipleVideo: (formData: FormData) => {
    return axiosClient.post(`/chat/attachment/video/multiple`, formData)
  },

  uploadSingleVideo: (formData: FormData) => {
    return axiosClient.post(`/chat/attachment/video/single`, formData)
  },

  deleteAttachment: (id: string) => {
    return axiosClient.delete(`/chat/attachment/${id}`)
  },

  getDetailMessage: (id: string) => {
    return axiosClient.get(`/chat/message/detail/${id}`)
  },

  leaveRoomByCompoundingCarId: (compounding_car_id: number) => {
    return axiosClient.delete(`/chat/room/compounding_car_id/${compounding_car_id}/leave`)
  },

  joinRoomByCompoundingCarId: (compounding_car_id: number) => {
    return axiosClient.post(`/chat/room/compounding_car_id/${compounding_car_id}/join`)
  },

  updateRoomInfo: (params: UpdateRoomInfo) => {
    const { room_id, ...rest } = params
    return axiosClient.patch(`/chat/room/info/${room_id}`, rest)
  },
}

export { chatAPI }
