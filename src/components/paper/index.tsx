import { COLORS, SHADOW } from '@/theme'
import React from 'react'
import { View, ViewStyle } from 'react-native'

interface PaperProps {
  children: JSX.Element | JSX.Element[]
  style?: ViewStyle | ViewStyle[] | undefined
}

export const Paper = ({ children, style }: PaperProps) => {
  return (
    <View
      style={[
        {
          padding: 16,
          backgroundColor: COLORS.white,
          borderRadius: 10,
          ...SHADOW.element,
        },
        style,
      ]}
    >
      {children}
    </View>
  )
}
