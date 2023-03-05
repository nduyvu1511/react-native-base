import { useNavigation } from '@react-navigation/native'
import { useEffect, useRef } from 'react'

export const useBackFocus = (cb: () => void) => {
  const navigation = useNavigation()
  const secondRef = useRef<boolean>(false)

  useEffect(() => {
    navigation.addListener('focus', () => {
      if (secondRef?.current === false) {
        secondRef.current = true
        return
      }

      cb()
    })
  }, [])
}
