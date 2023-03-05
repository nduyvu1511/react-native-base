import { COLORS, COMMON_STYLES } from '@/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    width: 200,
    ...COMMON_STYLES.flexCenter,
    backgroundColor: COLORS.black50,
  },
  modal: {
    maxWidth: 350,
    width: '100%',
    backgroundColor: COLORS.white,
    borderRadius: 16,
    overflow: 'hidden',
  },
  modalFullScreen: {
    flex: 1,
    height: '100%',
    width: '100%',
    borderRadius: 0,
  },
  modalChildren: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
  },
})
