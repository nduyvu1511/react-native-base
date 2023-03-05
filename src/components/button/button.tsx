import { COLORS, TYPOGRAPHY } from '@/theme'
import React from 'react'
import { Button as RButton, ButtonProps as RButtonProps } from 'react-native-paper'

export type ButtonProps = Omit<RButtonProps, 'children'> & {
  title: string
}

export const Button = ({ title, ...attributes }: ButtonProps) => {
  return (
    <RButton
      mode="contained"
      style={[{ borderWidth: 0, borderRadius: 16 }]}
      contentStyle={[{ borderRadius: 16, height: 48 }]}
      labelStyle={[TYPOGRAPHY.body16Bold, { color: COLORS.white }]}
      buttonColor={COLORS.primary}
      {...attributes}
    >
      {title}
    </RButton>
  )
}
