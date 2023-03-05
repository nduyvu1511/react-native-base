import { SuccessIcon, WarningIcon } from '@/assets'
import { COLORS, TYPOGRAPHY } from '@/theme'
import { default as React } from 'react'
import { StyleSheet, View } from 'react-native'
import RToast, {
  BaseToast,
  BaseToastProps,
  ErrorToast,
  ToastConfig,
  ToastProps as RToastProps,
} from 'react-native-toast-message'

interface ToastProps extends RToastProps {}

export const Toast = ({ ...attributes }: ToastProps) => {
  const toastConfig: ToastConfig = {
    success: (props: BaseToastProps) => (
      <BaseToast
        {...props}
        style={{ borderLeftColor: COLORS.success, height: 48 }}
        contentContainerStyle={{ paddingHorizontal: 16 }}
        text1Style={styles.text1}
        text1NumberOfLines={2}
        renderLeadingIcon={() => (
          <View
            style={{
              justifyContent: 'center',
              marginLeft: 12,
            }}
          >
            <SuccessIcon fill={COLORS.success} size={24} />
          </View>
        )}
      />
    ),

    error: (props: BaseToastProps) => (
      <ErrorToast
        {...props}
        style={{ borderLeftColor: COLORS.red, height: 48 }}
        text1Style={styles.text1}
        text2Style={styles.text2}
        text1NumberOfLines={2}
        renderLeadingIcon={() => (
          <View
            style={{
              justifyContent: 'center',
              marginLeft: 12,
            }}
          >
            <WarningIcon fill={COLORS.error} size={24} />
          </View>
        )}
      />
    ),

    warning: (props: BaseToastProps) => (
      <BaseToast
        {...props}
        style={{ borderLeftColor: COLORS.warning, height: 48 }}
        contentContainerStyle={{ paddingHorizontal: 16 }}
        text1Style={styles.text1}
        text1NumberOfLines={2}
        renderLeadingIcon={() => (
          <View
            style={{
              justifyContent: 'center',
              marginLeft: 12,
            }}
          >
            <WarningIcon fill={COLORS.warning} size={24} />
          </View>
        )}
      />
    ),
  }

  return <RToast config={toastConfig} position="top" {...attributes} />
}

const styles = StyleSheet.create({
  text1: {
    ...TYPOGRAPHY.body14Medium,
  },
  text2: {
    ...TYPOGRAPHY.body14Medium,
  },
})
