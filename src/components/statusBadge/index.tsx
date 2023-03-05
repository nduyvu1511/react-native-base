import { TYPOGRAPHY } from '@/theme'
import React from 'react'
import { Text, View, ViewStyle } from 'react-native'

export interface StatusBadgeProps {
  title: string
  color?: string
  bg?: string
}

export const StatusBadge = ({
  bg,
  color,
  title,
  style,
}: StatusBadgeProps & {
  style?: ViewStyle | ViewStyle[]
}) => {
  return (
    <View
      style={[
        {
          paddingVertical: 4,
          paddingHorizontal: 8,
          backgroundColor: bg,
          alignSelf: 'flex-start',
          borderRadius: 8,
        },
        style,
      ]}
    >
      <Text
        style={{
          ...TYPOGRAPHY.body12Normal,
          color: color,
        }}
      >
        {title}
      </Text>
    </View>
  )
}
