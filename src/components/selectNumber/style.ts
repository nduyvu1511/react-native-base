import { COLORS, COMMON_STYLES, SPACING, TYPOGRAPHY } from '@/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  header: {
    padding: SPACING.md,
  },
  title: {
    ...COMMON_STYLES.topBarTitle,
    textAlign: 'center',
    marginBottom: SPACING.md,
  },
  closeBtn: {
    ...COMMON_STYLES.flexCenter,
    width: 20,
    height: 20,
    backgroundColor: COLORS.gray30,
    borderRadius: 50,
    position: 'absolute',
    top: '20%',
    right: 4,
  },
  resultArea: {
    flexDirection: 'row',
    position: 'relative',
  },
  modeBtnWrapper: {
    marginTop: 16,
    ...COMMON_STYLES.flexCenter,
  },
  modeBtn: {
    height: 40,
    flexDirection: 'row',
  },
  modeBtnItem: {
    ...COMMON_STYLES.flexCenter,
    height: '100%',
    width: 100,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.active,
  },
  modeBtnItemText: {
    ...TYPOGRAPHY.body14Medium,
    fontSize: 14,
    color: COLORS.active,
  },
  modeBtnItemTextActive: {
    color: COLORS.white,
  },
  modeBtnItemLeft: {
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderRightWidth: 0,
  },
  modeBtnItemRight: {
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  modeBtnItemActive: {
    backgroundColor: COLORS.active,
    borderWidth: 1,
  },
  result: {
    ...TYPOGRAPHY.body16Medium,
    fontSize: 30,
    lineHeight: 38,
    flex: 1,
    textAlign: 'center',
  },
  numberRow: {
    borderBottomColor: COLORS.gray20,
    borderBottomWidth: 1,
    width: '100%',
    flexDirection: 'row',
  },
  button: {
    ...COMMON_STYLES.flexCenter,
    padding: SPACING.md,
    flex: 1,
    borderRightColor: COLORS.gray20,
    borderRightWidth: 1,
  },
  buttonText: {
    ...TYPOGRAPHY.body16Medium,
    textAlign: 'center',
  },
  buttonRow: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    flex: 1,
    borderBottomColor: COLORS.gray20,
    borderBottomWidth: 1,
  },
  buttonCheck: {
    flex: 1,
    height: '100%',
    ...COMMON_STYLES.flexCenter,
  },
  buttonCheckTitle: {
    ...TYPOGRAPHY.body16Bold,
    textAlign: 'center',
  },
  BtnSeparate: {
    borderRightColor: COLORS.gray20,
    borderRightWidth: 1,
  },
  buttons: {
    height: 52,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: COLORS.gray20,
  },
})
