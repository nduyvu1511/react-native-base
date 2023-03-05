import { searchEmpty } from '@/assets'
import { COMMON_STYLES, COLORS, TYPOGRAPHY } from '@/theme'
import React from 'react'
import { Image, Text, View, ViewStyle } from 'react-native'
import { Button } from '../button'

export interface FilterEmptyProps {
  title?: string
  children?: JSX.Element
  source?: string
  containerStyle?: ViewStyle
  titleBtn?: string
  onBtnPress?: Function
}

export const FilterEmpty = ({
  title = 'Không có dữ liệu',
  children,
  source,
  containerStyle,
  titleBtn,
  onBtnPress,
}: FilterEmptyProps) => {
  return (
    <View style={[COMMON_STYLES.flexCenter, { paddingVertical: 24 }, containerStyle]}>
      <Image
        style={{ resizeMode: 'contain', width: 200, height: 200 }}
        source={source || searchEmpty}
      />

      <Text
        style={[
          TYPOGRAPHY.body16Medium,
          {
            color: COLORS.gray60,
          },
        ]}
      >
        {title}
      </Text>

      {titleBtn ? (
        <Button style={{ marginTop: 24 }} onPress={() => onBtnPress?.()} title={titleBtn} />
      ) : null}
      {children}
    </View>
  )
}
