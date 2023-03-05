import { userAPI } from '@/services'
import { UserDetailRes } from '@/types'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

type UserState = {
  userInfo: UserDetailRes | undefined
  token: string | undefined
  setToken: (_: string | undefined) => void
  setUserInfo: (_: UserDetailRes | undefined) => void
  fetchUserInfo: () => void
  logout: () => void
}

export const userSlice = create<UserState, [['zustand/devtools', never], ['zustand/immer', never]]>(
  devtools(
    immer((set) => ({
      userInfo: undefined,
      token: undefined,
      setUserInfo: (userInfo: UserDetailRes | undefined) =>
        set((state) => {
          state.userInfo = userInfo
        }),
      fetchUserInfo: () =>
        set(async (state) => {
          try {
            const res = await userAPI.getDetailUser()
            if (res?.data?.detail_shipper?.partner_id) {
              state.userInfo = res.data
            }
          } catch (error) {
            console.log(error)
          }
        }),
      setToken: (token: string | undefined) =>
        set((state) => {
          state.token = token
        }),
      logout: () =>
        set((state) => {
          ;(state.userInfo = undefined), (state.token = undefined)
        }),
    }))
  )
)
