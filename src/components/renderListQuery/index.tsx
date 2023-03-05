import { QueryList, UseQueryListRes } from '@/types'
import React from 'react'
import { FlatList, FlatListProps, ListRenderItem, View, ViewStyle } from 'react-native'
import { FilterEmpty, FilterEmptyProps } from '../empty'
import { Spinner } from '../loading'

type RenderListQueryProps<Data = any, Params extends QueryList = any> = Partial<
  UseQueryListRes<Data, Params>
> &
  Partial<FlatListProps<Data>> & {
    renderItem: ListRenderItem<Data>
    ListHeaderLoadingComponent?: (_: any) => JSX.Element
    LoadingComponent?: (_: any) => JSX.Element
    containerStyle?: ViewStyle | ViewStyle[]
    showListHeaderWhenLoading?: boolean
    emptyComponentProps?: FilterEmptyProps
  }

export const RenderListQuery = <Data = any, Params extends QueryList = any>({
  data,
  hasMore,
  emptyComponentProps,
  ListHeaderComponent,
  ListHeaderLoadingComponent,
  LoadingComponent,
  renderItem,
  containerStyle,
  showListHeaderWhenLoading = true,
  ...props
}: RenderListQueryProps<Data, Params>): JSX.Element => {
  const RenderLoading = ({ length = 8 }) => {
    if (!LoadingComponent) return <Spinner size="large" />

    return (
      <>
        {Array.from({ length }).map((_, index) => (
          <View key={index}>
            <LoadingComponent />
          </View>
        ))}
      </>
    )
  }

  if (props?.isValidating) {
    return (
      <View style={containerStyle}>
        <>
          {ListHeaderLoadingComponent ? (
            <View style={{ marginTop: 12 }}>
              <ListHeaderLoadingComponent />
            </View>
          ) : (
            ListHeaderComponent || null
          )}
        </>
        <RenderLoading />
      </View>
    )
  }

  return (
    <FlatList
      // ref={ref}
      data={data}
      ListHeaderComponent={ListHeaderComponent}
      ListFooterComponent={
        hasMore ? (
          <View style={{ marginTop: -12 }}>
            <RenderLoading length={4} />
          </View>
        ) : null
      }
      onEndReachedThreshold={0.4}
      refreshing={false}
      ListEmptyComponent={<FilterEmpty {...emptyComponentProps} />}
      onRefresh={props?.refresh}
      onEndReached={() => props?.fetchMore?.()}
      renderItem={renderItem}
      {...props}
    />
  )
}
