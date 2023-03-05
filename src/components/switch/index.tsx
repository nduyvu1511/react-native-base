import { COLORS } from '@/theme'
import React from 'react'
import { Switch as RSwitch, SwitchProps as RSwitchProps } from 'react-native'

type SwitchProps = Omit<RSwitchProps, 'onChange'> & {
  value?: boolean
  onChange?: Function
}

export const Switch = ({ onChange, value, ...attributes }: SwitchProps) => {
  return (
    <RSwitch
      value={value}
      trackColor={{ false: COLORS.gray40, true: COLORS.active }}
      thumbColor={COLORS.gray20}
      onChange={() => onChange?.()}
      {...attributes}
    />
  )
}
