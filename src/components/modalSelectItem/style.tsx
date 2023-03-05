import { COLORS, COMMON_STYLES, SHADOW, TYPOGRAPHY } from '@/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  header: {
    borderBottomColor: COLORS.gray20,
    borderBottomWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 16,
    ...COMMON_STYLES.flexRowCenter,
  },
  inputWrapper: {
    position: 'relative',
    height: 42,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: COLORS.gray20,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 8,
  },
  textInput: {
    padding: 2,
    paddingHorizontal: 8,
    flex: 1,
    ...TYPOGRAPHY.body14Medium,
  },
  inputIcon: {},
  listItem: {
    paddingVertical: 14,
    borderBottomColor: COLORS.gray20,
    borderBottomWidth: 1,
  },
  listItemText: {
    ...TYPOGRAPHY.body14Normal,
    textTransform: 'capitalize',
    flex: 1,
  },
})
