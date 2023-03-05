import { COLORS } from '@/theme'
import React from 'react'
import { ActivityIndicator, ActivityIndicatorProps, View, ViewStyle } from 'react-native'

interface SpinnerProps extends ActivityIndicatorProps {
  containerStyle?: ViewStyle | ViewStyle[]
}

export const Spinner = ({ containerStyle, ...attributes }: SpinnerProps) => {
  return (
    <View style={[{ paddingVertical: 16 }, containerStyle]}>
      <ActivityIndicator size={'small'} color={COLORS.gray50} {...attributes} />
    </View>
  )
}
