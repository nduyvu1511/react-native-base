import { COLORS } from '@/theme'
import React from 'react'
import Svg, { Circle, Path, Rect } from 'react-native-svg'

export const PaymentIcon = ({ size = 24, fill = COLORS.gray50 }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Rect
        x="22"
        y="3"
        width="18"
        height="20"
        rx="4"
        transform="rotate(90 22 3)"
        stroke={fill}
        stroke-width="1.5"
      />
      <Circle cx="6" cy="17" r="1" fill={fill} />
      <Path
        d="M2 7L22 7L22 11L2 11L2 7Z"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}
