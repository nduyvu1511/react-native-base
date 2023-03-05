import { COLORS, TYPOGRAPHY } from '@/theme'
import { Option } from '@/types'
import React, { useEffect, useRef, useState } from 'react'
import { FlatList, Pressable, Text, View, ViewStyle } from 'react-native'
import { ScrollView as GestureHandlerScrollView } from 'react-native-gesture-handler'

interface TabsProps<T extends string> {
  data: Option<T>[]
  itemActive?: T
  style?: ViewStyle | ViewStyle[]
  onChange?: (_: T) => void
}

export const Tabs = <T extends string>({ data, itemActive, style, onChange }: TabsProps<T>) => {
  const ref = useRef<FlatList>(null)
  const [index, setIndex] = useState<number>(0)

  useEffect(() => {
    if (index < 0) return

    ref.current?.scrollToIndex({
      index,
      animated: true,
      viewOffset: 10,
    })
  }, [index])

  useEffect(() => {
    if (itemActive === undefined) return

    setIndex(data?.findIndex((item) => item.value === itemActive) || 0)
  }, [itemActive])

  return (
    <View style={style}>
      <FlatList
        nestedScrollEnabled={true}
        initialNumToRender={data?.length}
        ref={ref}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={data}
        initialScrollIndex={index}
        onScrollToIndexFailed={({ index, averageItemLength }) => {
          ref.current?.scrollToOffset({
            offset: averageItemLength * index,
            animated: true,
          })
        }}
        renderScrollComponent={(p) => <GestureHandlerScrollView {...p} />}
        renderItem={({ item, index: _index }) => {
          const isActive = index === _index

          return (
            <Pressable
              onPress={() => {
                onChange?.(item.value)
                setIndex(_index)
              }}
            >
              <View
                style={{
                  borderRadius: 12,
                  paddingVertical: 8,
                  paddingHorizontal: 12,
                  marginRight: 12,
                  backgroundColor: isActive ? COLORS.primary : COLORS.white,
                }}
              >
                <Text style={[TYPOGRAPHY.body14Medium, isActive && { color: COLORS.white }]}>
                  {item.label}
                </Text>
              </View>
            </Pressable>
          )
        }}
      />
    </View>
  )
}
