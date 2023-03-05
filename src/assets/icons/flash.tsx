import { COLORS } from '@/theme'
import React from 'react'
import { Path, Svg } from 'react-native-svg'

export const FlashIcon = ({ size = 24, fill = COLORS.gray50 }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M17.1429 2H6.85714C6.38376 2 6 2.38376 6 2.85714C6 4.93271 7.22955 6.7211 9 7.53368V19C9 20.6569 10.3431 22 12 22C13.6569 22 15 20.6569 15 19V7.53368C16.7705 6.7211 18 4.93271 18 2.85714C18 2.38376 17.6162 2 17.1429 2Z"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 9V11"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}
