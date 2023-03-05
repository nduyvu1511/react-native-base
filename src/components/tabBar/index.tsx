import { ArrowLeftIcon, ArrowLeftLineIcon, ThreeDotsIcon } from '@/assets'
import { COLORS, SPACING } from '@/theme'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, TextStyle, View, ViewStyle } from 'react-native'
import { TouchableRipple } from 'react-native-paper'
import { IconButton } from '../button'
import { styles } from './style'

export interface TabBarProps {
  title?: string
  titleStyles?: TextStyle | TextStyle[]
  leftIcon?: JSX.Element
  showLeftElement?: boolean
  onLeftElementPress?: () => void
  renderLeftElement?: JSX.Element
  renderCenterElement?: JSX.Element
  renderRightElement?: JSX.Element
  showRightElement?: boolean
  rightWrapperStyle?: ViewStyle | ViewStyle[]
  onRightElementPress?: () => void
  rightIcon?: JSX.Element
  style?: ViewStyle | ViewStyle[]
  bgColor?: string
  height?: number
  iconColor?: string
}

export const TabBar = ({
  title,
  titleStyles,
  renderCenterElement,
  renderLeftElement,
  showLeftElement = true,
  rightIcon,
  leftIcon,
  style,
  bgColor = COLORS.white,
  height = SPACING.topBarHeight,
  iconColor = COLORS.gray70,
  renderRightElement,
  showRightElement = false,
  rightWrapperStyle,
  onRightElementPress,
  onLeftElementPress,
}: TabBarProps) => {
  const navigation = useNavigation()

  return (
    <View style={[styles.header, style, { backgroundColor: bgColor, height }]}>
      <View style={styles.left}>
        {showLeftElement
          ? renderLeftElement || (
              <IconButton
                borderless
                style={styles.button}
                onPress={onLeftElementPress ? onLeftElementPress : () => navigation.goBack()}
                icon={leftIcon || <ArrowLeftIcon fill={iconColor} />}
              />
            )
          : null}
      </View>

      <View style={styles.middle}>
        {renderCenterElement || (
          <Text numberOfLines={1} style={[styles.title, titleStyles]}>
            {title || ''}
          </Text>
        )}
      </View>

      <View style={[styles.right, rightWrapperStyle]}>
        {showRightElement
          ? renderRightElement || (
              <TouchableRipple borderless onPress={onRightElementPress} style={styles.button}>
                {rightIcon || <ThreeDotsIcon fill={iconColor} />}
              </TouchableRipple>
            )
          : null}
      </View>
    </View>
  )
}
