import { COLORS } from '@/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: COLORS.overlay,
  },
  mask: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  container: {
    backgroundColor: COLORS.white,
    width: '100%',
    height: 0,
    overflow: 'hidden',
  },
  draggableContainer: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  draggableIcon: {
    width: 35,
    height: 5,
    borderRadius: 5,
    margin: 10,
    backgroundColor: COLORS.gray50,
  },
})
