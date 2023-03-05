import React from 'react'
import { Pressable, StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native'
import { COLORS, COMMON_STYLES, SHADOW, SPACING, TYPOGRAPHY } from '../../theme'

type IconProps = {
  fill?: string
  size?: number
}

interface NavBottomItemProps {
  label: string
  active?: boolean
  RenderIcon: (_: IconProps) => JSX.Element
  onPress?: () => void
}

export const NavBottomItem = ({
  label,
  active = false,
  onPress,
  RenderIcon,
}: NavBottomItemProps) => {
  if (label === '') {
    return (
      <View style={styles.container}>
        {/* <View style={styles.circleWrapper}>
          <View style={styles.circle}></View>
        </View> */}

        <Pressable onPress={onPress} style={styles.mapBtn}>
          <RenderIcon size={24} fill={COLORS.white} />
        </Pressable>
      </View>
    )
  }

  return (
    <TouchableNativeFeedback
      onPress={onPress}
      background={TouchableNativeFeedback.Ripple(COLORS.gray30, true)}
    >
      <View style={styles.container}>
        <RenderIcon fill={active ? COLORS.primary : COLORS.gray50} size={24} />

        <Text
          numberOfLines={1}
          style={[
            TYPOGRAPHY.body12Medium,
            { fontSize: 11, marginTop: 2, color: active ? COLORS.primary : COLORS.gray50 },
          ]}
        >
          {label}
        </Text>
      </View>
    </TouchableNativeFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    ...COMMON_STYLES.flexCenter,
    position: 'relative',
    flex: 1,
    width: '100%',
    height: SPACING.bottomNavHeight,
    padding: 8,
  },
  circleWrapper: {
    ...COMMON_STYLES.flexCenter,
    height: '100%',
    width: '100%',
    overflow: 'hidden',
    top: -8,
  },
  circle: {
    position: 'relative',
    ...COMMON_STYLES.flexCenter,
    backgroundColor: COLORS.bg,
    borderRadius: 50,
    width: 72,
    height: 72,
    top: -26,
    borderColor: COLORS.gray10,
    borderWidth: 1,
    ...SHADOW.element,
    shadowColor: COLORS.gray10,
  },
  mapBtn: {
    ...COMMON_STYLES.flexCenter,
    width: 52,
    height: 52,
    borderRadius: 50,
    backgroundColor: COLORS.primary,
    shadowColor: COLORS.gray50,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 10,
  },
})
