import { COLORS } from '@/theme'
import React from 'react'
import Svg, { Path } from 'react-native-svg'

export const CartOutlineIcon = ({ fill = COLORS.gray50, size = 24 }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2 2C2 1.58579 2.33579 1.25 2.75 1.25H4.75C6.26878 1.25 7.5 2.48122 7.5 4H18C19.9528 4 21.5787 5.39935 21.9298 7.25H6V6V4C6 3.30964 5.44036 2.75 4.75 2.75H2.75C2.33579 2.75 2 2.41421 2 2ZM9.5 22C10.3284 22 11 21.3284 11 20.5C11 19.6716 10.3284 19 9.5 19C8.67157 19 8 19.6716 8 20.5C8 21.3284 8.67157 22 9.5 22ZM18.5 22C19.3284 22 20 21.3284 20 20.5C20 19.6716 19.3284 19 18.5 19C17.6716 19 17 19.6716 17 20.5C17 21.3284 17.6716 22 18.5 22ZM6 8.75H22V13C22 15.2091 20.2091 17 18 17H10C7.79086 17 6 15.2091 6 13V8.75Z"
        fill={fill}
      />
    </Svg>
  )
}
