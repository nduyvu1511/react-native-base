import { useCommonSlice } from '@/store'
import { COLORS } from '@/theme'
import React from 'react'
import { ActivityIndicatorProps } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'
import { Modal } from '../modal'

interface BackdropProps extends ActivityIndicatorProps {
  isVisible?: boolean
}

export const Backdrop = ({ isVisible, ...attributes }: BackdropProps) => {
  const backdropVisible = useCommonSlice((state) => state.backdropVisible)
  if (!backdropVisible && !isVisible) return null

  return (
    <Modal isVisible={isVisible || backdropVisible}>
      <ActivityIndicator size="large" color={COLORS.white as any} {...attributes} />
    </Modal>
  )
}
