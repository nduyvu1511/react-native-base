import { COLORS } from '@/theme'
import React from 'react'
import Svg, { Path } from 'react-native-svg'

export const ArrowLeftIcon = ({ size = 24, fill = COLORS.gray50 }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.4685 6.4145C14.7919 6.67326 14.8444 7.14522 14.5856 7.46867L10.9604 12.0002L14.5856 16.5316C14.8444 16.8551 14.7919 17.327 14.4685 17.5858C14.145 17.8446 13.6731 17.7921 13.4143 17.4687L9.41432 12.4687C9.19519 12.1948 9.19519 11.8055 9.41432 11.5316L13.4143 6.53163C13.6731 6.20818 14.145 6.15574 14.4685 6.4145Z"
        fill={fill}
      />
    </Svg>
  )
}
