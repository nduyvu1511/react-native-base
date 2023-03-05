import { COLORS, COMMON_STYLES, SPACING, TYPOGRAPHY } from '@/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  inputContainer: {
    ...COMMON_STYLES.flexRowCenter,
    width: '100%',
    height: 56,
    backgroundColor: COLORS.white98,
    borderRadius: SPACING.borderRadius,
    paddingHorizontal: SPACING.lg,
  },
  inputWrapper: {
    height: '100%',
    width: '100%',
    flex: 1,
    justifyContent: 'center',
  },
  inputText: {
    ...TYPOGRAPHY.body14Medium,
  },
  input: {
    fontSize: 13,
    lineHeight: 18,
    height: '100%',
    textAlignVertical: 'center',
  },
  leftIcon: {
    marginRight: 12,
  },
  rightIcons: {
    marginLeft: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
})
