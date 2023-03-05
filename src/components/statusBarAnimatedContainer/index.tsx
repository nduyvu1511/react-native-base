import { COLORS } from '@/theme'
import React, { useRef } from 'react'
import {
  Animated,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  ScrollViewProps,
  StatusBar,
  View,
} from 'react-native'

interface StatusBarAnimatedContainerProps extends ScrollViewProps {
  children: JSX.Element | JSX.Element[]
}

export const StatusBarAnimatedContainer = ({
  children,
  ...attributes
}: StatusBarAnimatedContainerProps) => {
  const animatedValue = useRef(new Animated.Value(0)).current

  const statusBarAnimatedOpacity = {
    opacity: animatedValue.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    }),
  }

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetY = e.nativeEvent.contentOffset.y
    animatedValue.setValue(offsetY)
  }

  return (
    <View style={{ position: 'relative', flex: 1 }}>
      <Animated.View
        style={[
          {
            width: '100%',
            height: StatusBar.currentHeight,
            backgroundColor: COLORS.white,
            position: 'absolute',
            top: 0,
            right: 0,
            zIndex: 10,
          },
          statusBarAnimatedOpacity,
        ]}
      />

      <ScrollView
        style={{ flex: 1, backgroundColor: COLORS.white }}
        scrollEventThrottle={16}
        onScroll={handleScroll}
        {...attributes}
      >
        {children}
      </ScrollView>
    </View>
  )
}
