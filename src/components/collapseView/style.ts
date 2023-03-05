import { COLORS, COMMON_STYLES, TYPOGRAPHY } from '@/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  btn: {
    ...COMMON_STYLES.flexRowCenter,
    alignSelf: 'center',
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginTop: 10,
  },
  btnTitle: {
    ...TYPOGRAPHY.body14Medium,
    color: COLORS.gray50,
    marginRight: 4,
  },
})
