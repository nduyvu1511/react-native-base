import { useCommonSlice, useUserInfoSlice } from '@/store'
import { AsyncHandler } from '@/types'
import { useEffect, useState } from 'react'
import Toast from 'react-native-toast-message'

interface Res {
  asyncHandler: <T>(params: AsyncHandler<T>) => void
  isLoading: boolean
}

const useAsync = (): Res => {
  const setBackdropVisible = useCommonSlice((state) => state.setBackdropVisible)
  const token = useUserInfoSlice((state) => state.token)
  const setToken = useUserInfoSlice((state) => state.setToken)
  const setUserInfo = useUserInfoSlice((state) => state.setUserInfo)
  const [isLoading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    return () => setBackdropVisible(false)
  }, [])

  const asyncHandler = async <T>(params: AsyncHandler<T>) => {
    const { fetcher, onSuccess, onError, config } = params
    const method = config?.method || 'POST'
    const {
      errorMsg,
      successMsg,
      showBackdrop = method === 'POST',
      showErrorMsg = method === 'POST',
      showSuccessMsg = method === 'POST',
      requiredToken = true,
    } = config || {}

    if (requiredToken && !token) {
      setUserInfo(undefined)
      setToken(undefined)
      return
    }

    try {
      showBackdrop && setBackdropVisible(true)
      setLoading(true)
      const res = await fetcher
      setLoading(false)
      showBackdrop && setBackdropVisible(false)
      console.log(res)

      if (!res?.status) {
        onError?.(res)
        showErrorMsg &&
          Toast.show({
            type: 'error',
            text1: errorMsg || res?.message || 'Có lỗi xảy ra, vui lòng thử lại sau',
          })
        return
      }

      onSuccess?.((res as any)?.data || res)
      showSuccessMsg &&
        Toast.show({
          type: 'success',
          text1: successMsg,
        })
    } catch (error) {
      console.log(error)
      showErrorMsg &&
        Toast.show({
          type: 'error',
          text1: errorMsg || 'Có lỗi xảy ra, vui lòng thử lại sau',
        })
      showBackdrop && setBackdropVisible(false)
      setLoading(false)
      onError?.(undefined)
    }
  }

  return {
    asyncHandler,
    isLoading,
  }
}

export { useAsync }
