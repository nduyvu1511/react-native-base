import { EyeCloseIcon, EyeOpenIcon } from '@/assets'
import { COMMON_STYLES } from '@/theme'
import { forwardRef, useState } from 'react'
import { Pressable, StyleSheet, TextInput as RTextInput } from 'react-native'
import { TextInput, TextInputProps } from '../textInput'

export type PasswordInputProps = TextInputProps & {}

export const PasswordInput = forwardRef<RTextInput, PasswordInputProps>((attributes, ref) => {
  const [secureText, setSecureText] = useState<boolean>(true)

  return (
    <TextInput
      ref={ref}
      {...attributes}
      secureTextEntry={secureText}
      rightIcon={
        <Pressable style={styles.passwordwBtn} onPress={() => setSecureText(!secureText)}>
          {secureText ? <EyeCloseIcon /> : <EyeOpenIcon />}
        </Pressable>
      }
    />
  )
})

const styles = StyleSheet.create({
  passwordwBtn: {
    ...COMMON_STYLES.flexCenter,
    paddingHorizontal: 4,
    paddingVertical: 8,
  },
})
