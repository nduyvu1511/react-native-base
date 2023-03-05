import { COLORS } from '@/theme'
import React from 'react'
import Svg, { Path } from 'react-native-svg'

export const SortArrowIcon = ({ fill = COLORS.gray50, size = 24 }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.4697 15.5303L15.4697 18.5303C15.7626 18.8232 16.2374 18.8232 16.5303 18.5303L19.5303 15.5303C19.8232 15.2374 19.8232 14.7626 19.5303 14.4697C19.2374 14.1768 18.7626 14.1768 18.4697 14.4697L16.75 16.1893V6C16.75 5.58579 16.4142 5.25 16 5.25C15.5858 5.25 15.25 5.58579 15.25 6L15.25 16.1893L13.5303 14.4697C13.2374 14.1768 12.7626 14.1768 12.4697 14.4697C12.1768 14.7626 12.1768 15.2374 12.4697 15.5303ZM8.53033 5.46967C8.23744 5.17678 7.76256 5.17678 7.46967 5.46967L4.46967 8.46967C4.17678 8.76256 4.17678 9.23744 4.46967 9.53033C4.76256 9.82322 5.23744 9.82322 5.53033 9.53033L7.25 7.81066V18C7.25 18.4142 7.58579 18.75 8 18.75C8.41421 18.75 8.75 18.4142 8.75 18V7.81066L10.4697 9.53033C10.7626 9.82322 11.2374 9.82322 11.5303 9.53033C11.8232 9.23744 11.8232 8.76256 11.5303 8.46967L8.53033 5.46967Z"
        fill={fill}
      />
    </Svg>
  )
}
