import { COLORS } from '@/theme'
import React from 'react'
import Svg, { Path } from 'react-native-svg'

export const PasswordIcon = ({ size = 20, fill = COLORS.gray50 }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path
        d="M9.50065 13.3332C9.50065 13.6093 9.72451 13.8332 10.0007 13.8332C10.2768 13.8332 10.5007 13.6093 10.5007 13.3332H9.50065ZM10.5007 11.6665C10.5007 11.3904 10.2768 11.1665 10.0007 11.1665C9.72451 11.1665 9.50065 11.3904 9.50065 11.6665H10.5007ZM6.66732 7.1665H13.334V6.1665H6.66732V7.1665ZM16.1673 9.99984V14.9998H17.1673V9.99984H16.1673ZM13.334 17.8332H6.66732V18.8332H13.334V17.8332ZM3.83398 14.9998V9.99984H2.83398V14.9998H3.83398ZM6.66732 17.8332C5.10251 17.8332 3.83398 16.5646 3.83398 14.9998H2.83398C2.83398 17.1169 4.55023 18.8332 6.66732 18.8332V17.8332ZM16.1673 14.9998C16.1673 16.5646 14.8988 17.8332 13.334 17.8332V18.8332C15.4511 18.8332 17.1673 17.1169 17.1673 14.9998H16.1673ZM13.334 7.1665C14.8988 7.1665 16.1673 8.43503 16.1673 9.99984H17.1673C17.1673 7.88275 15.4511 6.1665 13.334 6.1665V7.1665ZM6.66732 6.1665C4.55023 6.1665 2.83398 7.88275 2.83398 9.99984H3.83398C3.83398 8.43503 5.10251 7.1665 6.66732 7.1665V6.1665ZM7.16732 6.6665V4.99984H6.16732V6.6665H7.16732ZM12.834 4.99984V6.6665H13.834V4.99984H12.834ZM10.0007 2.1665C11.5655 2.1665 12.834 3.43503 12.834 4.99984H13.834C13.834 2.88275 12.1177 1.1665 10.0007 1.1665V2.1665ZM7.16732 4.99984C7.16732 3.43503 8.43584 2.1665 10.0007 2.1665V1.1665C7.88356 1.1665 6.16732 2.88275 6.16732 4.99984H7.16732ZM10.5007 13.3332V11.6665H9.50065V13.3332H10.5007Z"
        fill={fill}
      />
    </Svg>
  )
}
