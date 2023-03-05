import { COLORS } from '@/theme'
import React from 'react'
import Svg, { Circle, Path } from 'react-native-svg'

export const ChatIcon = ({ size = 24, fill = COLORS.gray50 }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M13 3H11C6.02944 3 2 7.02944 2 12V17C2 19.2091 3.79086 21 6 21H13C17.9706 21 22 16.9706 22 12C22 7.02944 17.9706 3 13 3Z"
        stroke={fill}
        stroke-width="1.5"
        stroke-linejoin="round"
      />
      <Circle cx="12" cy="12" r="1" fill={fill} />
      <Circle cx="16" cy="12" r="1" fill={fill} />
      <Circle cx="8" cy="12" r="1" fill={fill} />
    </Svg>
  )
}
