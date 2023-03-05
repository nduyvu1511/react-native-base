import { COLORS } from '@/theme'
import React from 'react'
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg'

export const WalletIcon = ({ size = 24, fill = COLORS.gray50 }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G clip-path="url(#clip0_298_21925)">
        <Path
          d="M16.5 4.5H5.5C3.29086 4.5 1.5 6.29086 1.5 8.5V12.5C1.5 14.7091 3.29086 16.5 5.5 16.5H12.5C14.7091 16.5 16.5 14.7091 16.5 12.5V4.5Z"
          stroke={fill}
          strokeWidth="1.3"
          stroke-Linejoin="round"
        />
        <Path
          d="M16.5 4.5C16.5 2.84315 15.1569 1.5 13.5 1.5H9C7.34315 1.5 6 2.84315 6 4.5V4.5H16.5V4.5Z"
          stroke={fill}
          strokeWidth="1.3"
          stroke-Linejoin="round"
        />
        <Path
          d="M1.5 9L1.5 12L4.5 12C5.32843 12 6 11.3284 6 10.5V10.5C6 9.67157 5.32843 9 4.5 9L1.5 9Z"
          stroke={fill}
          strokeWidth="1.3"
          stroke-Linejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_298_21925">
          <Rect width={size} height={size} fill={fill} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}
