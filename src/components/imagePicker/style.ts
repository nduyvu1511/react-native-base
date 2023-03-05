import { COMMON_STYLES, COLORS, TYPOGRAPHY } from '@/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnItem: {
    ...COMMON_STYLES.flexCenter,
    padding: 24,
    backgroundColor: COLORS.gray05,
    borderRadius: 8,
    flex: 1,
  },
  separator: {
    width: 16,
  },
  btnItemText: {
    ...TYPOGRAPHY.body14Normal,
    marginTop: 4,
  },
})
