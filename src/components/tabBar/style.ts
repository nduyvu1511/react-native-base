import { COLORS, COMMON_STYLES, SPACING } from '@/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    overflow: 'hidden',
  },
  button: {
    ...COMMON_STYLES.flexCenter,
    padding: 8,
    height: 40,
    width: 40,
    borderRadius: 50,
  },
  title: {
    ...COMMON_STYLES.topBarTitle,
  },
  left: { minWidth: 40 },
  middle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: 12,
  },
  right: {
    marginLeft: 12,
    minWidth: 40,
  },
})
