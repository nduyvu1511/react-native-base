import { COLORS } from '@/theme'
import React from 'react'
import Svg, { Path } from 'react-native-svg'

export const PhoneIcon = ({ size = 24, fill = COLORS.gray50 }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <Path
        d="M11.6333 15.1666C10.8799 15.1666 10.0866 14.9866 9.26659 14.6399C8.46659 14.2999 7.65992 13.8333 6.87325 13.2666C6.09325 12.6933 5.33992 12.0533 4.62659 11.3533C3.91992 10.6399 3.27992 9.88659 2.71325 9.11325C2.13992 8.31325 1.67992 7.51325 1.35325 6.73992C1.00659 5.91325 0.833252 5.11325 0.833252 4.35992C0.833252 3.83992 0.926585 3.34659 1.10659 2.88659C1.29325 2.41325 1.59325 1.97325 1.99992 1.59325C2.51325 1.08659 3.09992 0.833252 3.72659 0.833252C3.98659 0.833252 4.25325 0.893252 4.47992 0.999919C4.73992 1.11992 4.95992 1.29992 5.11992 1.53992L6.66659 3.71992C6.80659 3.91325 6.91325 4.09992 6.98659 4.28659C7.07325 4.48659 7.11992 4.68659 7.11992 4.87992C7.11992 5.13325 7.04659 5.37992 6.90659 5.61325C6.80659 5.79325 6.65325 5.98659 6.45992 6.17992L6.00659 6.65325C6.01325 6.67325 6.01992 6.68659 6.02659 6.69992C6.10659 6.83992 6.26659 7.07992 6.57325 7.43992C6.89992 7.81325 7.20659 8.15325 7.51325 8.46659C7.90659 8.85325 8.23325 9.15992 8.53992 9.41325C8.91992 9.73325 9.16659 9.89325 9.31325 9.96659L9.29992 9.99992L9.78659 9.51992C9.99325 9.31325 10.1933 9.15992 10.3866 9.05992C10.7533 8.83325 11.2199 8.79325 11.6866 8.98659C11.8599 9.05992 12.0466 9.15992 12.2466 9.29992L14.4599 10.8733C14.7066 11.0399 14.8866 11.2533 14.9933 11.5066C15.0933 11.7599 15.1399 11.9933 15.1399 12.2266C15.1399 12.5466 15.0666 12.8666 14.9266 13.1666C14.7866 13.4666 14.6133 13.7266 14.3933 13.9666C14.0133 14.3866 13.5999 14.6866 13.1199 14.8799C12.6599 15.0666 12.1599 15.1666 11.6333 15.1666ZM3.72659 1.83325C3.35992 1.83325 3.01992 1.99325 2.69325 2.31325C2.38659 2.59992 2.17325 2.91325 2.03992 3.25325C1.89992 3.59992 1.83325 3.96659 1.83325 4.35992C1.83325 4.97992 1.97992 5.65325 2.27325 6.34659C2.57325 7.05325 2.99325 7.78659 3.52659 8.51992C4.05992 9.25325 4.66659 9.96659 5.33325 10.6399C5.99992 11.2999 6.71992 11.9133 7.45992 12.4533C8.17992 12.9799 8.91992 13.4066 9.65325 13.7133C10.7933 14.1999 11.8599 14.3133 12.7399 13.9466C13.0799 13.8066 13.3799 13.5933 13.6533 13.2866C13.8066 13.1199 13.9266 12.9399 14.0266 12.7266C14.1066 12.5599 14.1466 12.3866 14.1466 12.2133C14.1466 12.1066 14.1266 11.9999 14.0733 11.8799C14.0533 11.8399 14.0133 11.7666 13.8866 11.6799L11.6733 10.1066C11.5399 10.0133 11.4199 9.94659 11.3066 9.89992C11.1599 9.83992 11.0999 9.77992 10.8733 9.91992C10.7399 9.98659 10.6199 10.0866 10.4866 10.2199L9.97992 10.7199C9.71992 10.9733 9.31992 11.0333 9.01325 10.9199L8.83325 10.8399C8.55992 10.6933 8.23992 10.4666 7.88659 10.1666C7.56659 9.89325 7.21992 9.57325 6.79992 9.15992C6.47325 8.82659 6.14659 8.47325 5.80659 8.07992C5.49325 7.71325 5.26659 7.39992 5.12659 7.13992L5.04659 6.93992C5.00659 6.78659 4.99325 6.69992 4.99325 6.60659C4.99325 6.36659 5.07992 6.15325 5.24659 5.98659L5.74659 5.46659C5.87992 5.33325 5.97992 5.20659 6.04659 5.09325C6.09992 5.00659 6.11992 4.93325 6.11992 4.86659C6.11992 4.81325 6.09992 4.73325 6.06659 4.65325C6.01992 4.54659 5.94659 4.42659 5.85325 4.29992L4.30659 2.11325C4.23992 2.01992 4.15992 1.95325 4.05992 1.90659C3.95325 1.85992 3.83992 1.83325 3.72659 1.83325ZM9.29992 10.0066L9.19325 10.4599L9.37325 9.99325C9.33992 9.98659 9.31325 9.99325 9.29992 10.0066Z"
        fill={fill}
      />
    </Svg>
  )
}