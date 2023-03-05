import { COLORS } from '@/theme'
import React from 'react'
import { StatusBar, View, ViewStyle } from 'react-native'
import { TabBar, TabBarProps } from '../tabBar'

interface ContainerProps extends TabBarProps {
  containerStyle?: ViewStyle | ViewStyle[]
  showTabbar?: boolean
  children: JSX.Element | JSX.Element[]
  bgColor?: string
}

export const Container = ({
  bgColor = COLORS.white,
  showTabbar = true,
  children,
  containerStyle,
  ...props
}: ContainerProps) => {
  return (
    <View style={[containerStyle, { flex: 1 }]}>
      <View style={{ height: StatusBar.currentHeight, backgroundColor: bgColor }} />
      {showTabbar ? <TabBar bgColor={bgColor} {...props} /> : null}
      {children}
    </View>
  )
}
