import { COMMON_STYLES } from '@/theme'
import React from 'react'
import { View } from 'react-native'

export const ListItemLoading = () => {
  return (
    <View style={COMMON_STYLES.flexRowCenter}>
      <View style={{ width: 20, height: 20, borderRadius: 50, marginRight: 12 }} />
      <View style={{ flex: 1, height: 16 }} />
    </View>
  )
}
