import { COMMON_STYLES } from '@/theme'
import React from 'react'
import { Dimensions, Platform, View, ViewStyle } from 'react-native'
import RModal, { ModalProps as RModalProps } from 'react-native-modal'
import { styles } from './style'

export type ModalProps = Partial<RModalProps> & {
  modalStyle?: ViewStyle | ViewStyle[]
}

const deviceWidth = Dimensions.get('window').width
const deviceHeight =
  Platform.OS === 'ios'
    ? Dimensions.get('window').height
    : require('react-native-extra-dimensions-android').get('REAL_WINDOW_HEIGHT')

export const Modal = ({ modalStyle, onDismiss, ...props }: ModalProps) => {
  return (
    <RModal
      onBackButtonPress={onDismiss}
      statusBarTranslucent
      onDismiss={onDismiss}
      onBackdropPress={onDismiss}
      deviceHeight={deviceHeight}
      deviceWidth={deviceWidth}
      animationIn="zoomInDown"
      animationOut="zoomOutDown"
      hideModalContentWhileAnimating
      useNativeDriverForBackdrop
      {...props}
      style={[
        {
          ...COMMON_STYLES.flexCenter,
          marginHorizontal: 0,
          marginVertical: 0,
        },
        props.style,
      ]}
    >
      <View style={[styles.modalChildren, modalStyle]}>{props.children}</View>
    </RModal>
  )
}
