import { Modal, SelectNumber, SelectNumberProps } from '@/components'
import { formatMoneyVND } from '@/helpers'
import { useModal } from '@/hooks'
import { COMMON_STYLES, TYPOGRAPHY } from '@/theme'
import React from 'react'
import { Pressable, Text, TextStyle, View, ViewStyle } from 'react-native'
import { styles } from './style'

type InputSelectNumberProps = Omit<SelectNumberProps, 'visible'> & {
  readOnly?: boolean
  style?: ViewStyle | ViewStyle[]
  inputStyle?: ViewStyle | ViewStyle[]
  labelStyle?: TextStyle | TextStyle[]
}

export const InputSelectNumber = ({
  inputStyle,
  labelStyle,
  style,
  readOnly = false,
  ...attributes
}: InputSelectNumberProps) => {
  const { isVisible, onClose, onOpen } = useModal()

  const displayValue = (): string => {
    if (attributes?.type === 'money') return formatMoneyVND(attributes?.value || 0)

    return (attributes?.value || 0) + ''
  }

  return (
    <>
      <View style={[COMMON_STYLES.flexRowSpaceBetween, style]}>
        <Text style={[TYPOGRAPHY.body14Normal, labelStyle]}>{attributes?.title}</Text>

        <Pressable
          pointerEvents={readOnly ? 'none' : 'auto'}
          style={[styles.container, inputStyle]}
          onPress={onOpen}
        >
          <Text style={styles.text}>{displayValue()}</Text>
        </Pressable>
      </View>

      <Modal
        onDismiss={onClose}
        isVisible={isVisible}
        style={{ width: 320, maxHeight: 370, height: '100%' }}
      >
        <SelectNumber {...attributes} onDismiss={onClose} />
      </Modal>
    </>
  )
}
