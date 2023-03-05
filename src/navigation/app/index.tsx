import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { HomeNavigator } from '../home'
import { NavBottomItem } from '@/components'
import { SCREEN_HIDE_TAB_BAR, TABS } from '@/constants'
import { COLORS, SPACING } from '@/theme'
import { getFocusedRouteNameFromRoute, ParamListBase, RouteProp } from '@react-navigation/native'
import { HomeIcon } from '@/assets'

const Tab = createBottomTabNavigator()

export const AppNavigator = () => {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={['bottom', 'left', 'right']}>
      <Tab.Navigator
        initialRouteName="Home"
        safeAreaInsets={{ top: 0 }}
        screenOptions={({ route }) => ({
          tabBarHideOnKeyboard: true,
          headerShown: false,
          tabBarStyle: {
            backgroundColor: COLORS.white,
            display: getRouteName(route),
            height: SPACING.bottomNavHeight,
            shadowColor: 'transparent',
            borderTopRightRadius: 16,
            borderTopLeftRadius: 16,
            borderTopColor: COLORS.gray10,
          },
        })}
      >
        <Tab.Screen
          name={TABS.Home}
          options={({ navigation, route }) => ({
            tabBarButton: ({ accessibilityState }) => (
              <NavBottomItem
                onPress={() => navigation.navigate(route)}
                label={'Trang chủ'}
                active={accessibilityState?.selected}
                RenderIcon={HomeIcon}
              />
            ),
          })}
          component={HomeNavigator}
        />
      </Tab.Navigator>
    </SafeAreaView>
  )
}

const getRouteName = (route: RouteProp<ParamListBase, string>) => {
  const routeName = getFocusedRouteNameFromRoute(route) || ''
  if (SCREEN_HIDE_TAB_BAR?.includes(routeName) || SCREEN_HIDE_TAB_BAR.includes(route?.name || '')) {
    return 'none'
  }

  return 'flex'
}
