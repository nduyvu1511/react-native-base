import { COMMON_STYLES, TYPOGRAPHY } from '@/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  alert: {
    height: 260,
    width: 340,
  },
  icon: { marginBottom: 12 },
  container: {
    ...COMMON_STYLES.flexCenter,
    padding: 24,
    flex: 1,
  },
  content: {
    flex: 1,
    marginBottom: 16,
    alignItems: 'center',
  },
  title: {
    ...TYPOGRAPHY.body16Bold,
    marginBottom: 8,
  },
  desc: {
    ...TYPOGRAPHY.body14Medium,
  },
  footer: {
    ...COMMON_STYLES.flexRowSpaceBetween,
  },
})
