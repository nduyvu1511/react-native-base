import { COLORS } from '@/theme'
import React from 'react'
import Svg, { Path } from 'react-native-svg'

export const PhotoIcon = ({ fill = COLORS.gray50, size = 24 }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 25 24" fill="none">
      <Path
        d="M22.5 14L19.561 11.8839C18.0338 10.7843 15.9467 10.898 14.5479 12.1569L10.4521 15.8431C9.05331 17.102 6.9662 17.2157 5.43901 16.1161L2.5 14M6.5 22H18.5C20.7091 22 22.5 20.2091 22.5 18V6C22.5 3.79086 20.7091 2 18.5 2H6.5C4.29086 2 2.5 3.79086 2.5 6V18C2.5 20.2091 4.29086 22 6.5 22ZM11.5 8.5C11.5 9.88071 10.3807 11 9 11C7.61929 11 6.5 9.88071 6.5 8.5C6.5 7.11929 7.61929 6 9 6C10.3807 6 11.5 7.11929 11.5 8.5Z"
        stroke={fill}
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </Svg>
  )
}
