import { COLORS, TYPOGRAPHY } from '@/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    borderColor: COLORS.gray30,
    borderWidth: 1,
    borderRadius: 5,
    marginLeft: 12,
    height: 32,
    minWidth: 120,
    maxWidth: 200,
    justifyContent: 'center',
    paddingVertical: 4,
    paddingHorizontal: 8,
    alignSelf: 'auto',
  },
  text: {
    ...TYPOGRAPHY.body16SemiBold,
    textAlign: 'right',
  },
})
