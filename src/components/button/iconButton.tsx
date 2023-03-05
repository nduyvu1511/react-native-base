import { COMMON_STYLES, COLORS } from '@/theme'
import React from 'react'
import { View, ViewStyle } from 'react-native'
import { TouchableRipple, TouchableRippleProps } from 'react-native-paper'

interface IconButtonProps extends Omit<TouchableRippleProps, 'children'> {
  icon: JSX.Element
  style?: ViewStyle | ViewStyle[]
  size?: number
}

export const IconButton = ({ icon, style, size = 40, ...attributes }: IconButtonProps) => {
  return (
    <TouchableRipple
      borderless
      style={[
        COMMON_STYLES.flexCenter,
        { width: size, height: size, borderRadius: 50, opacity: attributes?.disabled ? 0.5 : 1 },
        style,
      ]}
      {...attributes}
    >
      <View pointerEvents="none">{icon}</View>
    </TouchableRipple>
  )
}
