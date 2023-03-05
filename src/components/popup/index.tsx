import { WarningIcon } from '@/assets'
import { COLORS } from '@/theme'
import React from 'react'
import { Text, View } from 'react-native'
import { Button } from '../button'
import { Modal, ModalProps } from '../modal'
import { styles } from './style'

type PopupProps = Omit<ModalProps, 'children'> & {
  title?: string
  desc?: string
  leftBtnTitle?: string
  rightBtnTitle?: string
  onLeftBtnPress?: Function
  onRightBtnPress?: Function
  allowOverlayPress?: boolean
}

export const Popup = ({
  desc,
  title,
  onLeftBtnPress,
  leftBtnTitle,
  rightBtnTitle,
  onRightBtnPress,
  allowOverlayPress = true,
  ...attributes
}: PopupProps) => {
  return (
    <Modal
      {...attributes}
      animationIn="zoomInDown"
      animationOut="zoomOutDown"
      onBackdropPress={allowOverlayPress ? attributes?.onDismiss : undefined}
      modalStyle={styles.alert}
    >
      <View style={styles.container}>
        <View style={styles.icon}>
          <WarningIcon fill={COLORS.primary} size={70} />
        </View>

        <View style={styles.content}>
          {title ? <Text style={styles.title}>{title}</Text> : null}

          {desc ? (
            <Text numberOfLines={2} style={styles.desc}>
              {desc}
            </Text>
          ) : null}
        </View>

        <View style={styles.footer}>
          {onLeftBtnPress ? (
            <Button
              style={{ marginRight: 16, flex: 1, backgroundColor: COLORS.gray30 }}
              title={leftBtnTitle || 'Quay lại'}
              onPress={() => {
                attributes?.onDismiss?.()
                onLeftBtnPress?.()
              }}
            />
          ) : null}

          {onRightBtnPress ? (
            <Button
              style={{ flex: 1 }}
              onPress={() => {
                attributes?.onDismiss?.()
                onRightBtnPress?.()
              }}
              title={rightBtnTitle || 'Xác nhận'}
            />
          ) : null}
        </View>
      </View>
    </Modal>
  )
}
