import { avatarBlank, imageBlur } from '@/assets'
import { toImageUrl } from '@/helpers'
import { COLORS, COMMON_STYLES } from '@/theme'
import React from 'react'
import { Image, ImageProps, ImageStyle, View, ViewStyle } from 'react-native'

export interface AvatarProps extends ImageProps {
  url: string
  size?: number
  showBorder?: boolean
  style?: ImageStyle
  containerStyle?: ViewStyle | ViewStyle[]
  isOnline?: boolean
  dotColor?: string | undefined
  dotStyle?: ViewStyle | ViewStyle[]
}

export const Avatar = ({
  url,
  size = 52,
  showBorder,
  style,
  containerStyle,
  dotColor,
  isOnline,
  ...attributes
}: AvatarProps) => {
  return (
    <View
      style={[
        {
          position: 'relative',
          borderRadius: 50,
        },
        showBorder && {
          ...COMMON_STYLES.flexCenter,
          width: size + 8,
          height: size + 8,
          borderColor: '#47A7FF',
          borderWidth: 1,
        },
        containerStyle,
      ]}
    >
      <Image
        style={[{ width: size, height: size, borderRadius: 50 }, style]}
        source={url ? { uri: toImageUrl(url) } : avatarBlank}
        resizeMode="cover"
        loadingIndicatorSource={{ uri: imageBlur }}
        {...attributes}
      />

      {isOnline ? (
        <View
          style={{
            position: 'absolute',
            bottom: 2,
            right: 2,
            width: 10,
            height: 10,
            borderRadius: 50,
            borderColor: COLORS.white,
            borderWidth: 1,
            zIndex: 10,
            backgroundColor: dotColor || COLORS.success,
          }}
        />
      ) : null}
    </View>
  )
}
