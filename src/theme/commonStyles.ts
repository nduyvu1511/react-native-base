import { StyleSheet } from 'react-native'
import { COLORS } from './color'
import { TYPOGRAPHY } from './typography'

export const COMMON_STYLES = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: COLORS.bg,
  },
  flexCenter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexRowCenter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  flexRowSpaceBetween: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  container: {
    padding: 16,
    flex: 1,
  },
  inputItem: {
    marginBottom: 8,
  },
  inputLabel: {
    marginBottom: 4,
  },
  inputLabelText: {
    ...TYPOGRAPHY.label,
  },
  inputLabelRequired: {
    ...TYPOGRAPHY.label,
    color: COLORS.error,
  },
  inputContainer: {
    marginBottom: 24,
  },
  inputWrapper: {
    backgroundColor: COLORS.inputBg,
    paddingHorizontal: 16,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  input: {
    ...TYPOGRAPHY.input,
    height: 48,
    borderColor: COLORS.gray40,
    flex: 1,
  },
  inputText: {
    ...TYPOGRAPHY.sm,
  },
  inputRightIcon: {
    marginLeft: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputLeftIcon: {
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputError: {
    borderColor: COLORS.error,
  },
  inputErrorText: {
    ...TYPOGRAPHY.errorInputText,
    marginTop: 8,
  },
  buttonBottom: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: COLORS.white,
    flexDirection: 'row',
  },
  absoluteInset: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  separateDashed: {
    marginVertical: 12,
    width: '100%',
    resizeMode: 'contain',
  },
  countUp: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderColor: COLORS.gray30,
    borderWidth: 1,
    borderRadius: 5,
  },
  imageFluid: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
})
