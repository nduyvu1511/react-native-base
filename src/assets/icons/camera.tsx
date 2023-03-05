import { COLORS } from '@/theme'
import React from 'react'
import Svg, { Path } from 'react-native-svg'

export const CameraIcon = ({ fill = COLORS.gray50, size = 24 }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 29 28" fill="none">
      <Path
        d="M18 15.75C18 17.683 16.433 19.25 14.5 19.25C12.567 19.25 11 17.683 11 15.75C11 13.817 12.567 12.25 14.5 12.25C16.433 12.25 18 13.817 18 15.75Z"
        stroke={fill}
        strokeWidth="1.5"
      />
      <Path
        d="M25 18.082V13.4154C25 10.1937 22.3883 7.58203 19.1667 7.58203H19.0196C18.5016 5.56927 16.6745 4.08203 14.5 4.08203C12.3255 4.08203 10.4984 5.56927 9.98035 7.58203H9.83333C6.61167 7.58203 4 10.1937 4 13.4154V18.082C4 21.3037 6.61167 23.9154 9.83333 23.9154H19.1667C22.3883 23.9154 25 21.3037 25 18.082Z"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </Svg>
  )
}
