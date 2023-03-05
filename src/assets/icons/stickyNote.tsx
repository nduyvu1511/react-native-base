import { COLORS } from '@/theme'
import React from 'react'
import Svg, { Path } from 'react-native-svg'

export const StickyNoteIcon = ({ size = 24, fill = COLORS.gray50 }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M8 5.75C7.59 5.75 7.25 5.41 7.25 5V2C7.25 1.59 7.59 1.25 8 1.25C8.41 1.25 8.75 1.59 8.75 2V5C8.75 5.41 8.41 5.75 8 5.75Z"
        fill={fill}
      />
      <Path
        d="M16 5.75C15.59 5.75 15.25 5.41 15.25 5V2C15.25 1.59 15.59 1.25 16 1.25C16.41 1.25 16.75 1.59 16.75 2V5C16.75 5.41 16.41 5.75 16 5.75Z"
        fill={fill}
      />
      <Path
        d="M15 11.75H7C6.59 11.75 6.25 11.41 6.25 11C6.25 10.59 6.59 10.25 7 10.25H15C15.41 10.25 15.75 10.59 15.75 11C15.75 11.41 15.41 11.75 15 11.75Z"
        fill={fill}
      />
      <Path
        d="M12 15.75H7C6.59 15.75 6.25 15.41 6.25 15C6.25 14.59 6.59 14.25 7 14.25H12C12.41 14.25 12.75 14.59 12.75 15C12.75 15.41 12.41 15.75 12 15.75Z"
        fill={fill}
      />
      <Path
        d="M15 22.75H9C3.38 22.75 2.25 20.1 2.25 15.82V9.65C2.25 4.91 3.85 2.98 7.96 2.75H16C20.15 2.98 21.75 4.91 21.75 9.65V16C21.75 16.41 21.41 16.75 21 16.75C20.59 16.75 20.25 16.41 20.25 16V9.65C20.25 5.29 18.8 4.41 15.96 4.25H8C5.2 4.41 3.75 5.29 3.75 9.65V15.82C3.75 19.65 4.48 21.25 9 21.25H15C15.41 21.25 15.75 21.59 15.75 22C15.75 22.41 15.41 22.75 15 22.75Z"
        fill={fill}
      />
      <Path
        d="M15 22.75C14.9 22.75 14.81 22.73 14.71 22.69C14.43 22.57 14.25 22.3 14.25 22V19C14.25 16.58 15.58 15.25 18 15.25H21C21.3 15.25 21.58 15.43 21.69 15.71C21.81 15.99 21.74 16.31 21.53 16.53L15.53 22.53C15.39 22.67 15.2 22.75 15 22.75ZM18 16.75C16.42 16.75 15.75 17.42 15.75 19V20.19L19.19 16.75H18Z"
        fill={fill}
      />
    </Svg>
  )
}
