import { CheckIcon } from '@/assets'
import { COLORS, COMMON_STYLES, SHADOW } from '@/theme'
import React from 'react'
import { TouchableOpacity, TouchableOpacityProps, ViewStyle } from 'react-native'

type FixedButton = Partial<TouchableOpacityProps> & {
  style?: ViewStyle | ViewStyle[]
  icon?: JSX.Element
}

export const FixedButton = ({ icon, style, ...attributes }: FixedButton) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[
        {
          ...COMMON_STYLES.flexCenter,
          position: 'absolute',
          bottom: 16,
          right: 16,
          zIndex: 1000,
          width: 60,
          height: 60,
          borderRadius: 50,
          backgroundColor: COLORS.primary,
          shadowColor: COLORS.black,
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.27,
          shadowRadius: 4.65,
          elevation: 5,
        },
        style,
      ]}
      {...attributes}
    >
      {icon || <CheckIcon fill={COLORS.white} />}
    </TouchableOpacity>
  )
}
