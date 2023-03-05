import React from 'react'
import { Pressable, Text, TextStyle, ViewStyle } from 'react-native'
import { styles } from './style'

interface ChipItemProps {
  style?: ViewStyle | ViewStyle[]
  textStyle?: TextStyle | TextStyle[]
  onPress?: Function
  title: string
  isActive?: boolean
}

export const ChipItem = ({ title, onPress, style, textStyle, isActive }: ChipItemProps) => {
  return (
    <Pressable
      onPress={() => onPress?.()}
      style={[styles.item, isActive && styles.itemActive, style]}
    >
      <Text style={[styles.text, isActive && styles.textActive, textStyle]}>{title}</Text>
    </Pressable>
  )
}
