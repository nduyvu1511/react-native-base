import { MinusIcon, PlusIcon } from '@/assets'
import { useDebounce } from '@/hooks'
import { COLORS } from '@/theme'
import React, { useEffect, useState } from 'react'
import { TextInput, TextStyle, TouchableHighlight, View, ViewStyle } from 'react-native'
import { styles } from './style'

interface QuantityInputProps {
  defaultValue?: number
  onChange?: (_: number) => void
  limit?: number
  style?: ViewStyle | ViewStyle[]
  textStyle?: TextStyle | TextStyle[]
  size?: 'sm' | 'lg'
  timer?: number
}

export const QuantityInput = ({
  defaultValue = 1,
  onChange,
  limit = 1000,
  style,
  textStyle,
  size = 'sm',
  timer = 300,
}: QuantityInputProps) => {
  const [qty, setQty] = useState<number>(defaultValue)
  const [triggerBy, setTriggerBy] = useState<'input' | 'button' | undefined>()
  const qtyDebounce = useDebounce(qty, timer)

  useEffect(() => {
    setQty(defaultValue)
  }, [defaultValue])

  useEffect(() => {
    if (triggerBy === 'input' && qtyDebounce >= 1) {
      onChange?.(qtyDebounce)
    }
  }, [qtyDebounce])

  const changeQuantity = (type: 'increase' | 'decrease') => {
    setTriggerBy('button')
    if (type === 'decrease') {
      if (qty > 1) {
        setQty(qty - 1)
        onChange?.(qty - 1)
      }
    } else {
      if (qty < limit) {
        setQty(qty + 1)
        onChange?.(qty + 1)
      }
    }
  }

  const handleChange = (value: string) => {
    const re = /^[0-9\b]+$/

    setTriggerBy('input')
    if (value === '' || re.test(value)) {
      if (+value <= limit) {
        setQty(+value)

        if (+value >= 1) {
          // onChange?.(+value)
        }
      } else {
        setQty(limit)
        // onChange?.(limit)
      }
    }
  }

  const handleBlur = () => {
    setTriggerBy(undefined)
    if (qty <= 0) {
      setQty(1)
      onChange?.(1)
    }
  }

  return (
    <View style={[styles.container, size === 'lg' && styles.containerLg, style]}>
      <TouchableHighlight
        underlayColor={COLORS.gray10}
        style={[styles.btn, size === 'lg' && styles.btnLg, qty <= 1 && styles.btnDisabled]}
        onPress={() => changeQuantity('decrease')}
      >
        <MinusIcon width={size === 'lg' ? 18 : 12} fill={COLORS.gray50} />
      </TouchableHighlight>

      <TextInput
        blurOnSubmit
        onBlur={handleBlur}
        value={qty + ''}
        onChangeText={handleChange}
        keyboardType="number-pad"
        style={[styles.textInput, size === 'lg' && { fontSize: 18, lineHeight: 26 }, textStyle]}
      />

      <TouchableHighlight
        underlayColor={COLORS.gray10}
        style={[styles.btn, size === 'lg' && styles.btnLg, qty >= limit && styles.btnDisabled]}
        onPress={() => changeQuantity('increase')}
      >
        <PlusIcon size={size === 'lg' ? 16 : 12} fill={COLORS.gray50} />
      </TouchableHighlight>
    </View>
  )
}
