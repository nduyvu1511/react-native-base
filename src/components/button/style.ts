import { COLORS, COMMON_STYLES, TYPOGRAPHY } from '@/theme'
import { StyleSheet } from 'react-native'

export const buttonStyles = StyleSheet.create({
  button: {
    height: 46,
    borderRadius: 12,
    paddingHorizontal: 24,
    ...COMMON_STYLES.flexRowCenter,
  },
  buttonDisabled: {
    backgroundColor: COLORS.gray40,
    opacity: 0.8,
  },
  buttonLoading: {
    opacity: 0.5,
  },
  text: {
    ...TYPOGRAPHY.body16Bold,
    color: COLORS.white,
  },
})
