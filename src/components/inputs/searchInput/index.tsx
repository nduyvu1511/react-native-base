import { CloseIcon, QrCodeIcon, SearchIcon } from '@/assets'
import { convertViToEn } from '@/helpers'
import { useDebounce } from '@/hooks'
import { COLORS } from '@/theme'
import React, { useEffect, useRef, useState } from 'react'
import { Pressable, TextInput, TextInputProps, TextStyle, View, ViewStyle } from 'react-native'
import { styles } from './style'

export interface SearchInputProps extends Omit<TextInputProps, 'onChangeText'> {
  timer?: number
  showDebounceTimer?: boolean
  onPressQrCode?: Function
  style?: ViewStyle | ViewStyle[]
  inputStyle?: TextStyle | TextStyle[]
  bg?: string
  onPress?: Function
  leftIconStyle?: ViewStyle | ViewStyle[]
  convertToEn?: boolean
  onChangeText?: (val: string) => void
  onSubmit?: (val: string) => void
  onClearText?: () => void
}

export const SearchInput = ({
  timer = 300,
  showDebounceTimer = true,
  onPressQrCode,
  style = {},
  inputStyle,
  onPress,
  leftIconStyle,
  onChangeText: externalOnChange,
  onSubmit: externalOnSubmit,
  convertToEn = true,
  onClearText,
  ...attributes
}: SearchInputProps) => {
  const secondRef = useRef<boolean>(false)
  const [val, setVal] = useState<string>()
  const debouncedValue: string = useDebounce(val, timer)

  useEffect(() => {
    if (!showDebounceTimer || !externalOnChange) return

    if (secondRef?.current === false) {
      secondRef.current = true
      return
    }

    externalOnChange?.(convertToEn ? convertViToEn(debouncedValue) : debouncedValue)
  }, [debouncedValue])

  const handleChange = (e: string) => {
    if (!showDebounceTimer) externalOnChange?.(e ? (convertToEn ? convertViToEn(e) : e) : '')
    setVal(e)
  }

  return (
    <View style={[styles.inputContainer, style]}>
      <View style={[styles.leftIcon, leftIconStyle]}>
        <SearchIcon size={20} fill={COLORS.gray40} />
      </View>

      <Pressable onPress={() => onPress?.()} style={styles.inputWrapper}>
        <TextInput
          style={[styles.inputText, inputStyle]}
          placeholderTextColor={COLORS.gray30}
          placeholder={attributes?.placeholder || 'Tìm kiếm...'}
          onChangeText={handleChange}
          value={val}
          {...attributes}
        />
      </Pressable>

      {val || onPressQrCode ? (
        <View style={styles.rightIcons}>
          {val ? (
            <Pressable
              style={{ padding: 6 }}
              onPress={() => {
                handleChange('')
                onClearText?.()
              }}
            >
              <CloseIcon size={9} fill={COLORS.gray50} />
            </Pressable>
          ) : null}

          {onPressQrCode ? (
            <Pressable style={{ padding: 6 }} onPress={() => onPressQrCode?.()}>
              <QrCodeIcon size={20} fill={COLORS.gray50} />
            </Pressable>
          ) : null}
        </View>
      ) : null}
    </View>
  )
}
