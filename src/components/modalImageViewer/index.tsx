import { ArrowLeftIcon, ArrowRightIcon } from '@/assets'
import { COLORS } from '@/theme'
import { AttachmentRes } from '@/types'
import React, { useEffect, useState } from 'react'
import { Modal, Pressable } from 'react-native'
import RImageViewer, { ImageViewerPropsDefine } from 'react-native-image-zoom-viewer'

export type ModalImageViewerProps = ImageViewerPropsDefine & {
  isVisible: boolean
  imageUrls: AttachmentRes[]
  onClose?: () => void
}

export const ModalImageViewer = ({
  isVisible,
  index: indexProps,
  imageUrls,
  onClose,
  ...props
}: ModalImageViewerProps) => {
  const [index, setIndex] = useState<number>(0)

  useEffect(() => {
    setIndex(indexProps && indexProps >= 0 ? indexProps : 0)
  }, [indexProps])

  const onNext = () => {
    setIndex(index < imageUrls?.length - 1 ? index + 1 : 0)
  }

  const onPrev = () => {
    setIndex(index === 0 ? imageUrls.length - 1 : index - 1)
  }

  return (
    <Modal
      visible={isVisible}
      onRequestClose={onClose}
      onDismiss={onClose}
      statusBarTranslucent
      transparent
    >
      <RImageViewer
        imageUrls={imageUrls}
        index={index}
        onLongPress={undefined}
        enableSwipeDown
        renderArrowRight={() => (
          <Pressable onPress={onNext} style={{ padding: 14 }}>
            <ArrowRightIcon size={24} fill={COLORS.white} />
          </Pressable>
        )}
        renderArrowLeft={() => (
          <Pressable onPress={onPrev} style={{ padding: 14 }}>
            <ArrowLeftIcon size={24} fill={COLORS.white} />
          </Pressable>
        )}
        onCancel={onClose}
        {...props}
      />
    </Modal>
  )
}
