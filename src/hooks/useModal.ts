import React, { useState } from 'react'

export const useModal = () => {
  const [visible, setVisible] = useState<boolean>(false)

  const onClose = () => setVisible(false)
  const onOpen = () => setVisible(true)

  return {
    visible,
    onClose,
    onOpen,
  }
}
