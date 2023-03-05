import { COLORS } from '@/theme'
import React from 'react'
import Svg, { Path } from 'react-native-svg'

export const PlusIcon = ({ size = 14, fill = COLORS.gray50 }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <Path
        d="M7.75 1C7.75 0.585786 7.41421 0.25 7 0.25C6.58579 0.25 6.25 0.585786 6.25 1H7.75ZM6.25 13C6.25 13.4142 6.58579 13.75 7 13.75C7.41421 13.75 7.75 13.4142 7.75 13H6.25ZM13 7.75C13.4142 7.75 13.75 7.41421 13.75 7C13.75 6.58579 13.4142 6.25 13 6.25V7.75ZM1 6.25C0.585786 6.25 0.25 6.58579 0.25 7C0.25 7.41421 0.585786 7.75 1 7.75L1 6.25ZM6.25 1V13H7.75V1H6.25ZM13 6.25L1 6.25L1 7.75L13 7.75V6.25Z"
        fill={fill}
      />
    </Svg>
  )
}
