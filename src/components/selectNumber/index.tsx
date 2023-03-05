import { CloseIcon, DeleteIcon } from '@/assets'
import { formatNumber } from '@/helpers'
import { COLORS } from '@/theme'
import React, { useEffect, useState } from 'react'
import { Pressable, Text, TouchableHighlight, View } from 'react-native'
import { styles } from './style'

type ModeType = 'percentage' | 'number' | 'money'

export interface ConfirmSelectNumberRes {
  type: ModeType
  value: number
}

export interface SelectNumberProps {
  onDismiss?: Function
  value?: number
  type?: ModeType
  showModeToggle?: boolean
  limit?: number
  numbersOfDecimal?: number
  title?: string
  onConfirm?: (_: ConfirmSelectNumberRes) => void
}

const NUMBERS = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

export const SelectNumber = ({
  onDismiss,
  value,
  type: modeProps = 'number',
  showModeToggle,
  limit: limitProps = 999999999,
  numbersOfDecimal = 2,
  title,
  onConfirm,
}: SelectNumberProps) => {
  const [mode, setMode] = useState<ModeType>(modeProps)
  const [limit, setLimit] = useState<number>(limitProps)
  const [result, setResult] = useState<string>('01')

  useEffect(() => {
    setResult(Number(value) > 0 && Number(value) <= limit ? value + '' : '0')
  }, [value])

  const handleSelect = (value: string) => {
    if (mode === 'percentage') {
      if (result === '0' && value !== '.') {
        setResult(value)
        return
      }

      if (
        (value === '.' && result?.includes('.')) ||
        (result?.includes('.') && result?.split('.')[1]?.length >= numbersOfDecimal)
      )
        // Unset value if already contains one dot and numbers of decimal greater than allowed number
        return

      const val = `${result}${value}`

      setResult(Number(val) >= 100 ? '100' : val)
    } else {
      if (result === '0') {
        if (Number(value) > limit) {
          setResult(limit + '')
        } else {
          setResult(value)
        }

        return
      }

      const val = `${result}${value}`
      if (Number(val) > limit) {
        setResult(limit + '')
      } else {
        setResult(`${result}${value}`)
      }
    }
  }

  const handleDelete = () => {
    if (result.length > 1) {
      setResult(result.slice(0, -1))
      return
    }

    setResult('0')
  }

  const closeModal = () => {
    onDismiss?.()
    setResult('0')
  }

  const handleSubmit = () => {
    onConfirm?.({ type: mode, value: Number(result) })
    closeModal?.()
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={[styles.header]}>
        <Text style={styles.title}>{title}</Text>

        <View>
          <View style={styles.resultArea}>
            <Text
              numberOfLines={1}
              style={[styles.result, result !== '0' && { marginHorizontal: 32 }]}
            >
              {mode === 'percentage' ? result : formatNumber(Number(result))}
            </Text>

            {result !== '0' ? (
              <Pressable onPress={() => setResult('0')} style={styles.closeBtn}>
                <CloseIcon size={8} fill={COLORS.white} />
              </Pressable>
            ) : null}
          </View>

          {showModeToggle ? (
            <View style={styles.modeBtnWrapper}>
              <View style={styles.modeBtn}>
                {[
                  ['number', 'Giá trị'],
                  ['percentage', '%'],
                ].map(([value, label]) => (
                  <Pressable
                    onPress={() => {
                      setMode(value as ModeType)
                      setResult('0')
                      value === 'number' ? setLimit(limitProps) : setLimit(100)
                    }}
                    style={[
                      styles.modeBtnItem,
                      value === 'number' ? styles.modeBtnItemLeft : styles.modeBtnItemRight,
                      mode === value && styles.modeBtnItemActive,
                    ]}
                  >
                    <Text
                      style={[
                        styles.modeBtnItemText,
                        mode === value && styles.modeBtnItemTextActive,
                      ]}
                    >
                      {label}
                    </Text>
                  </Pressable>
                ))}
              </View>
            </View>
          ) : null}
        </View>
      </View>

      <View style={{ flex: 1, borderTopWidth: 1, borderTopColor: COLORS.gray20 }}>
        {NUMBERS.map((item, index) => (
          <View key={index} style={[styles.row]}>
            {item.map((num, index) => (
              <TouchableHighlight
                key={index}
                onPress={() => handleSelect(`${num}`)}
                underlayColor={COLORS.gray10}
                style={styles.button}
              >
                <Text style={styles.buttonText}>{num}</Text>
              </TouchableHighlight>
            ))}
          </View>
        ))}

        <View style={[styles.row, { borderBottomWidth: 0 }]}>
          <TouchableHighlight
            underlayColor={COLORS.gray10}
            onPress={() => handleSelect(mode === 'number' || mode === 'money' ? '000' : '.')}
            style={styles.button}
          >
            <Text style={styles.buttonText}>
              {mode === 'number' || mode === 'money' ? '000' : '.'}
            </Text>
          </TouchableHighlight>

          <TouchableHighlight
            underlayColor={COLORS.gray10}
            onPress={() => handleSelect('0')}
            style={styles.button}
          >
            <Text style={styles.buttonText}>0</Text>
          </TouchableHighlight>

          <TouchableHighlight
            underlayColor={COLORS.gray10}
            onPress={handleDelete}
            style={styles.button}
          >
            <View pointerEvents="none">
              <DeleteIcon fill={COLORS.textBody} />
            </View>
          </TouchableHighlight>
        </View>
      </View>

      <View style={styles.buttons}>
        <TouchableHighlight
          underlayColor={COLORS.gray10}
          style={styles.buttonCheck}
          onPress={() => onDismiss?.()}
        >
          <Text style={[styles.buttonCheckTitle, { color: COLORS.error }]}>Thoát</Text>
        </TouchableHighlight>

        <View style={styles.BtnSeparate} />

        <TouchableHighlight
          underlayColor={COLORS.gray10}
          style={styles.buttonCheck}
          onPress={handleSubmit}
        >
          <Text style={[styles.buttonCheckTitle, { color: COLORS.primary }]}>Xác nhận</Text>
        </TouchableHighlight>
      </View>
    </View>
  )
}
