import { COLORS } from '@/theme'
import React from 'react'
import Svg, { Path } from 'react-native-svg'

export const BarCodeIcon = ({ fill = COLORS.gray50, size = 24 }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M5 8V7C5 5.89543 5.89543 5 7 5H17C18.1046 5 19 5.89543 19 7V8"
        stroke={fill}
        strokeWidth="1.5"
        stroke-linecap="round"
      />
      <Path
        d="M19 16L19 17C19 18.1046 18.1046 19 17 19L7 19C5.89543 19 5 18.1046 5 17L5 16"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <Path d="M2 12H22" stroke={fill} strokeWidth="1.5" strokeLinecap="round" />
    </Svg>
  )
}
