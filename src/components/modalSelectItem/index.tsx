import { SearchInput, Spinner, TextItem } from '@/components'
import { convertViToEn } from '@/helpers'
import { COLORS, SPACING, TYPOGRAPHY } from '@/theme'
import { IdAndName } from '@/types'
import React, { useEffect, useRef, useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import { styles } from './style'

interface ModalSelectItem {
  data: IdAndName[] | undefined
  isLoading?: boolean
  activeId?: number
  title: string
  onChange?: (_: IdAndName) => void
}

export const ModalSelectItem = ({
  data,
  isLoading,
  title,
  activeId,
  onChange,
}: ModalSelectItem) => {
  const ref = useRef<FlatList>(null)
  const [list, setList] = useState<IdAndName[]>([])

  useEffect(() => {
    if (data?.length) {
      setList([...data])
    }
  }, [data])

  const handleSearchList = (val: string) => {
    if (!data?.length) return

    if (!val) {
      setList([...data])
      return
    }

    const newlist =
      [...data]?.filter((item) => convertViToEn(item.name)?.includes(convertViToEn(val))) || []
    setList(newlist)
  }

  const renderView = () => {
    if (isLoading) return <Spinner />

    if (!list?.length)
      return (
        <Text style={[TYPOGRAPHY.body14Normal, { textAlign: 'center', paddingVertical: 16 }]}>
          Không có dữ liệu
        </Text>
      )

    return (
      <FlatList
        ref={ref}
        initialScrollIndex={activeId && list?.findIndex((item) => item.id === activeId)}
        data={list}
        onScrollToIndexFailed={({ index, averageItemLength }) => {
          ref.current?.scrollToOffset({
            offset: averageItemLength * index,
            animated: true,
          })
        }}
        renderItem={({ item }) => (
          <TextItem
            style={{ paddingVertical: 14 }}
            title={item.name}
            onPress={() => onChange?.(item)}
            active={item.id === activeId}
          />
        )}
      />
    )
  }

  return (
    <View style={{ borderRadius: SPACING.md, height: '100%', flex: 1 }}>
      <View>
        <View style={styles.header}>
          <Text style={[TYPOGRAPHY.body16SemiBold]}>{title}</Text>
        </View>

        <View style={{ borderBottomColor: COLORS.gray20, borderBottomWidth: 1 }}>
          <SearchInput onChangeText={handleSearchList} showDebounceTimer={false} />
        </View>
      </View>

      <View style={{ flex: 1 }}>{renderView()}</View>
    </View>
  )
}
