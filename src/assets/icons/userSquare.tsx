import { COLORS } from '@/theme'
import React from 'react'
import Svg, { Circle, Path } from 'react-native-svg'

export const UserSquareIcon = ({ size = 24, fill = COLORS.gray50 }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 25 25" fill="none">
      <Path
        d="M17.297 18.843a.75.75 0 00.978-1.137l-.978 1.137zm-10-1.137a.75.75 0 00.978 1.137l-.978-1.137zm5.49-.682c1.602 0 3.139.64 4.51 1.819l.978-1.137c-1.591-1.37-3.464-2.182-5.489-2.182v1.5zm-4.512 1.819c1.372-1.18 2.908-1.819 4.511-1.819v-1.5c-2.025 0-3.898.813-5.489 2.182l.978 1.137z"
        fill={fill}
      />
      <Circle
        r={3}
        transform="matrix(1 0 0 -1 12.786 10.274)"
        stroke={fill}
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
      <Path
        d="M18.786 2.274h-12a4 4 0 00-4 4v12a4 4 0 004 4h12a4 4 0 004-4v-12a4 4 0 00-4-4z"
        stroke={fill}
        strokeWidth={1.5}
      />
    </Svg>
  )
}
