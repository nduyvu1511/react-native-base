import { COLORS, COMMON_STYLES, TYPOGRAPHY } from '@/theme'
import { Option } from '@/types'
import React, { useEffect, useRef, useState } from 'react'
import { Animated, Dimensions, Text, TouchableNativeFeedback, View, ViewStyle } from 'react-native'

interface TopTabProps<T extends string> {
  data: Option<T>[]
  itemActive?: T
  style?: ViewStyle | ViewStyle[]
  onChange?: (_: T) => void
}

export const TopTab = <T extends string>({ data, itemActive, style, onChange }: TopTabProps<T>) => {
  const [index, setIndex] = useState<number>(0)
  const totalWidth = Dimensions.get('window').width
  const tabWidth = totalWidth / data.length
  const translateValue = useRef(new Animated.Value(0)).current

  useEffect(() => {
    if (!itemActive) return

    const index = data?.findIndex((item) => item.value === itemActive) || 0
    setIndex(index)
    translateLine(index)
  }, [itemActive])

  const translateLine = (index: number) => {
    Animated.spring(translateValue, {
      toValue: index * tabWidth,
      velocity: 10,
      useNativeDriver: true,
    }).start()
  }

  return (
    <View style={[{ flexDirection: 'row' }, style]}>
      {data.map((item, _index) => {
        const isActive = index === _index

        return (
          <TouchableNativeFeedback
            key={item.value}
            onPress={() => {
              onChange?.(item.value)
              setIndex(_index)
              translateLine(_index)
            }}
          >
            <View
              style={{
                flex: 1,
                paddingVertical: 16,
                position: 'relative',
                flexShrink: 1,
                ...COMMON_STYLES.flexCenter,
              }}
            >
              <Text style={[TYPOGRAPHY.body14Medium, isActive && { color: COLORS.primary }]}>
                {item.label}
              </Text>
            </View>
          </TouchableNativeFeedback>
        )
      })}

      <Animated.View
        style={{
          position: 'absolute',
          width: tabWidth,
          bottom: 0,
          backgroundColor: COLORS.primary,
          height: 1.4,
          transform: [{ translateX: translateValue }],
        }}
      />
    </View>
  )
}
