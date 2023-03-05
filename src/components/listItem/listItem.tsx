import { COLORS, COMMON_STYLES, TYPOGRAPHY } from '@/theme'
import React from 'react'
import { Text, TextStyle, View, ViewStyle } from 'react-native'

interface ListItemProps {
  leftIcon?: JSX.Element
  label: string
  value?: string | number
  rightElement?: JSX.Element
  style?: ViewStyle | ViewStyle[]
  textstyle?: ViewStyle | ViewStyle[]
  labelStyle?: TextStyle | TextStyle[]
  valueStyle?: TextStyle | TextStyle[]
}

export const ListItem = ({
  label,
  value,
  leftIcon,
  style,
  rightElement,
  valueStyle,
  textstyle,
  labelStyle,
}: ListItemProps) => (
  <View style={[{ flexDirection: 'row', alignItems: 'center', marginBottom: 12 }, style]}>
    {leftIcon ? <View style={{ marginRight: 12 }}>{leftIcon}</View> : null}

    <View style={[COMMON_STYLES.flexRowSpaceBetween, { flex: 1 }, textstyle]}>
      <Text style={[TYPOGRAPHY.body14Normal, { marginRight: 12 }, labelStyle]}>{label}</Text>

      {rightElement || (
        <Text
          style={[
            TYPOGRAPHY.body16SemiBold,
            {
              color: COLORS.gray70,
            },
            valueStyle,
          ]}
        >
          {value}
        </Text>
      )}
    </View>
  </View>
)
