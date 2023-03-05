import { ForwardModalRef } from '@/types'
import { useRef } from 'react'

export const useModalRef = () => {
  const ref = useRef<ForwardModalRef>(null)

  const onClose = () => ref.current?.onClose()
  const onOpen = () => ref.current?.onOpen()

  return { ref, onClose, onOpen }
}
