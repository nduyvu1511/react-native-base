import { HomeNavigation } from '@/types'
import { useNavigation } from '@react-navigation/native'
import { useEffect } from 'react'

export const useScreenRemove = (cb: () => void) => {
  const navigation = useNavigation<HomeNavigation>()

  useEffect(() => {
    navigation.addListener('beforeRemove', cb)

    return () => {
      navigation.removeListener('beforeRemove', cb)
    }
  }, [navigation])
}
