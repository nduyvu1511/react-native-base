import { COLORS, TYPOGRAPHY } from '@/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  item: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
    marginRight: 10,
    backgroundColor: COLORS.gray10,
    borderWidth: 1,
    borderColor: 'transparent',
    marginBottom: 10,
  },
  text: {
    ...TYPOGRAPHY.body14Normal,
    fontSize: 13,
    lineHeight: 18,
  },
  textActive: {
    color: COLORS.primary,
  },
  itemActive: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.primary,
  },
  itemDisabled: {
    backgroundColor: COLORS.disabled,
    borderColor: COLORS.disabled,
  },
})
