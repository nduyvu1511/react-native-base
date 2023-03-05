import { COLORS } from '@/theme'
import React from 'react'
import Svg, { Path } from 'react-native-svg'

export const MoreCircleIcon = ({ fill = COLORS.gray50, size = 24 }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.0003 3.20801C19.9596 3.20801 24.792 8.03917 24.792 13.9997C24.792 19.959 19.9596 24.7913 14.0003 24.7913C8.03978 24.7913 3.20862 19.959 3.20862 13.9997C3.20862 8.04034 8.04095 3.20801 14.0003 3.20801Z"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.596 14.015H18.6065"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.9189 14.015H13.9294"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.24166 14.015H9.25216"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}
