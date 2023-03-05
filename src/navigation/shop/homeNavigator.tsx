import { NAVIGATION } from '@/constants'
import { HomeScreen } from '@/screens'
import { COLORS } from '@/theme'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

const Stack = createNativeStackNavigator()

export const HomeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        statusBarColor: COLORS.white,
        statusBarStyle: 'dark',
        headerShown: false,
        animationDuration: 500,
      }}
      initialRouteName={NAVIGATION.home}
    >
      <Stack.Screen name={NAVIGATION.home} component={HomeScreen} />
    </Stack.Navigator>
  )
}
