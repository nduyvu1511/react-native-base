import { ForwardModalRef } from '@/types'
import React, { useImperativeHandle, useRef, useState, forwardRef } from 'react'
import {
  Animated,
  KeyboardAvoidingView,
  Modal,
  PanResponder,
  Platform,
  Pressable,
  View,
  ViewStyle,
} from 'react-native'
import { styles } from './style'

export type BottomSheetProps = {
  height?: number
  minClosingHeight?: number
  openDuration?: number
  closeDuration?: number
  closeOnDragDown?: boolean
  closeOnPressMask?: boolean
  dragFromTopOnly?: boolean
  closeOnPressBack?: boolean
  keyboardAvoidingViewEnabled?: boolean
  wrapperStyles?: ViewStyle | ViewStyle[]
  containerStyles?: ViewStyle | ViewStyle[]
  dragIconStyles?: ViewStyle | ViewStyle[]
  children: JSX.Element
}

export const BottomSheet = forwardRef<ForwardModalRef, BottomSheetProps>(
  (
    {
      height = 260,
      minClosingHeight = 0,
      openDuration = 300,
      closeDuration = 200,
      closeOnDragDown = true,
      dragFromTopOnly = false,
      closeOnPressMask = true,
      closeOnPressBack = true,
      wrapperStyles,
      containerStyles,
      dragIconStyles,
      keyboardAvoidingViewEnabled = Platform.OS === 'ios',
      children,
    },
    ref
  ) => {
    const [isVisible, setIsVisible] = useState<boolean>(false)
    const animatedHeight = useRef(new Animated.Value(0)).current
    const pan = useRef(new Animated.ValueXY()).current
    const panResponder = useRef(
      PanResponder.create({
        onStartShouldSetPanResponder: () => closeOnDragDown,
        onPanResponderMove: (e, gestureState) => {
          if (gestureState.dy > 0) {
            Animated.event([null, { dy: pan.y }], { useNativeDriver: false })(e, gestureState)
          }
        },
        onPanResponderRelease: (e, gestureState) => {
          if (height / 4 - gestureState.dy < 0) {
            setModalVisible(false)
          } else {
            Animated.spring(pan, { toValue: { x: 0, y: 0 }, useNativeDriver: false }).start()
          }
        },
      })
    ).current

    useImperativeHandle(
      ref,
      () => ({
        onClose: () => setModalVisible(false),
        onOpen: () => setModalVisible(true),
      }),
      [ref]
    )

    const onClose = () => setModalVisible(false)

    const setModalVisible = (visible: boolean) => {
      if (visible) {
        Animated.timing(animatedHeight, {
          useNativeDriver: false,
          toValue: height,
          duration: openDuration,
        }).start()
        setIsVisible(true)
      } else {
        Animated.timing(animatedHeight, {
          useNativeDriver: false,
          toValue: minClosingHeight,
          duration: closeDuration,
        }).start(() => {
          pan.setValue({ x: 0, y: 0 })
          animatedHeight.setValue(0)
          setIsVisible(false)
        })
      }
    }

    return (
      <Modal
        transparent
        animationType={'fade'}
        visible={isVisible}
        statusBarTranslucent
        onRequestClose={() => closeOnPressBack && setModalVisible(false)}
      >
        <KeyboardAvoidingView
          enabled={keyboardAvoidingViewEnabled}
          behavior="padding"
          style={[styles.wrapper, wrapperStyles]}
        >
          <Pressable style={styles.mask} onPress={() => (closeOnPressMask ? onClose() : null)} />
          <Animated.View
            {...(!dragFromTopOnly && panResponder.panHandlers)}
            style={[
              styles.container,
              { transform: pan.getTranslateTransform() },
              { height: animatedHeight },
              containerStyles,
            ]}
          >
            {closeOnDragDown && (
              <View
                {...(dragFromTopOnly && panResponder.panHandlers)}
                style={styles.draggableContainer}
              >
                <View style={[styles.draggableIcon, dragIconStyles]} />
              </View>
            )}
            {children}
          </Animated.View>
        </KeyboardAvoidingView>
      </Modal>
    )
  }
)
