import { Backdrop, Toast } from '@/components'
import { AppNavigator } from '@/navigation/app'
import React, { useEffect } from 'react'
import { AppState, AppStateStatus, Platform } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { enableScreens } from 'react-native-screens'
import SplashScreen from 'react-native-splash-screen'
import { SWRConfig } from 'swr'

const App = () => {
  useEffect(() => {
    SplashScreen.hide()

    if (Platform.OS === 'ios') {
      enableScreens(false)
    }
  }, [])

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SWRConfig
        value={{
          provider: () => new Map(),
          isVisible: () => {
            return true
          },
          revalidateOnFocus: false,

          initFocus(callback) {
            let appState = AppState.currentState

            const onAppStateChange = (nextAppState: AppStateStatus) => {
              /* If it's resuming from background or inactive mode to active one */
              if (appState.match(/inactive|background/) && nextAppState === 'active') {
                callback()
              }
              appState = nextAppState
            }

            // Subscribe to the app state change events
            const subscription = AppState.addEventListener('change', onAppStateChange)

            return () => {
              subscription.remove()
            }
          },
        }}
      >
        <AppNavigator />
        <Toast />
        <Backdrop size={'large'} />
      </SWRConfig>
    </GestureHandlerRootView>
  )
}

export default App
