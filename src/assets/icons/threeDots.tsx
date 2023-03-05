import { COLORS } from '@/theme'
import React from 'react'
import Svg, { Path } from 'react-native-svg'

export const ThreeDotsIcon = ({ size = 24, fill = COLORS.gray50 }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.5 6.25C13.5 6.94036 12.9404 7.5 12.25 7.5C11.5596 7.5 11 6.94036 11 6.25C11 5.55964 11.5596 5 12.25 5C12.9404 5 13.5 5.55964 13.5 6.25ZM13.5 11.25C13.5 11.9404 12.9404 12.5 12.25 12.5C11.5596 12.5 11 11.9404 11 11.25C11 10.5596 11.5596 10 12.25 10C12.9404 10 13.5 10.5596 13.5 11.25ZM12.25 17.5C12.9404 17.5 13.5 16.9404 13.5 16.25C13.5 15.5596 12.9404 15 12.25 15C11.5596 15 11 15.5596 11 16.25C11 16.9404 11.5596 17.5 12.25 17.5Z"
        fill={fill}
      />
    </Svg>
  )
}
