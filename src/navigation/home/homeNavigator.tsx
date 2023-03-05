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
      initialRouteName={NAVIGATION.Home}
    >
      <Stack.Screen name={NAVIGATION.Home} component={HomeScreen} />
    </Stack.Navigator>
  )
}
