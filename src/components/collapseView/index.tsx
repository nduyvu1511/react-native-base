import { ArrowDownIcon } from '@/assets'
import { COLORS } from '@/theme'
import React, { useRef, useState } from 'react'
import { Animated, LayoutChangeEvent, Pressable, Text, View } from 'react-native'
import { styles } from './style'

interface CollapseViewProps {
  renderPressableChild?: JSX.Element
  children: JSX.Element | JSX.Element[]
  initialHeight?: number
  duration?: number
  label?: string
  onChange?: (_: boolean) => void
}

export const CollapseView = ({
  children,
  renderPressableChild,
  initialHeight = 202,
  duration = 50,
  label = 'Xem thêm',
  onChange,
}: CollapseViewProps) => {
  const [isExpand, setIsExpand] = useState<boolean>(false)
  const [fullHeight, setFullHeight] = useState(initialHeight)
  const animatedHeight = useRef(new Animated.Value(0)).current
  const animatedOpacity = {
    opacity: animatedHeight.interpolate({
      inputRange: [0, fullHeight],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    }),
  }

  const expand = () => {
    onChange?.(!isExpand)
    setIsExpand(!isExpand)
    Animated.spring(animatedHeight, {
      friction: duration,
      toValue: !isExpand ? fullHeight : 0,
      useNativeDriver: false,
    }).start()
  }

  const onLayout = (e: LayoutChangeEvent) => {
    let { height } = e.nativeEvent.layout
    height = Math.floor(height)
    if (height > initialHeight) {
      setFullHeight(height)
    }
  }

  return (
    <>
      <Animated.View style={[{ height: animatedHeight }, animatedOpacity]}>
        <View style={{ overflow: 'hidden' }} onLayout={onLayout}>
          {children}
        </View>
      </Animated.View>

      <Pressable onPress={expand}>
        {renderPressableChild || (
          <View style={styles.btn}>
            <Text style={styles.btnTitle}>{!isExpand ? label : 'Thu gọn'}</Text>
            <View>
              <ArrowDownIcon
                style={{ transform: [{ rotate: isExpand ? '180deg' : '0deg' }] }}
                fill={COLORS.gray50}
                width={9}
              />
            </View>
          </View>
        )}
      </Pressable>
    </>
  )
}
