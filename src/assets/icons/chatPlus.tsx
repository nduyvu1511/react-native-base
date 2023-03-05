import { COLORS } from '@/theme'
import React from 'react'
import Svg, { Path } from 'react-native-svg'

export const ChatPlusIcon = ({ size = 24, fill = COLORS.gray50 }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 9V15M15 12H9M11 3H13C17.9706 3 22 7.02944 22 12C22 16.9706 17.9706 21 13 21H6C3.79086 21 2 19.2091 2 17V12C2 7.02944 6.02944 3 11 3Z"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </Svg>
  )
}
