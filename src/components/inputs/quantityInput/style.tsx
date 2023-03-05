import { COLORS, COMMON_STYLES, TYPOGRAPHY } from '@/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 36,
    alignItems: 'center',
    borderRadius: 5,
    borderColor: COLORS.gray20,
    borderWidth: 1,
    width: '100%',
  },
  containerLg: {
    height: 52,
  },
  textInput: {
    ...TYPOGRAPHY.body14Medium,
    lineHeight: 16,
    paddingVertical: 4,
    flex: 1,
    paddingHorizontal: 2,
    textAlign: 'center',
    borderRightColor: COLORS.gray20,
    borderLeftColor: COLORS.gray20,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    height: '100%',
    minWidth: 40,
  },
  btn: {
    width: 40,
    height: '100%',
    ...COMMON_STYLES.flexCenter,
  },
  btnLg: {
    width: 80,
  },
  btnDisabled: {
    opacity: 0.3,
  },
})
