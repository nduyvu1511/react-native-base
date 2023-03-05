import { COLORS } from '@/theme'
import React from 'react'
import Svg, { Path } from 'react-native-svg'

export const QrCodeIcon = ({ fill = COLORS.gray50, size = 20 }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path
        d="M0.6 4.3C0.9 4.3 1.2 4 1.2 3.7V1.2H3.7C4 1.2 4.3 0.9 4.3 0.6C4.3 0.3 4 0 3.7 0H0.6C0.3 0 0 0.3 0 0.6V3.7C0 4 0.3 4.3 0.6 4.3Z"
        fill={fill}
      />
      <Path
        d="M19.4002 0H16.3002C16.0002 0 15.7002 0.3 15.7002 0.6C15.7002 0.9 16.0002 1.2 16.3002 1.2H18.8002V3.7C18.8002 4 19.1002 4.3 19.4002 4.3C19.7002 4.3 20.0002 4 20.0002 3.7V0.6C20.0002 0.3 19.7002 0 19.4002 0Z"
        fill={fill}
      />
      <Path
        d="M3.7 18.8002H1.2V16.3002C1.2 16.0002 0.9 15.7002 0.6 15.7002C0.3 15.7002 0 16.0002 0 16.3002V19.4002C0 19.7002 0.3 20.0002 0.6 20.0002H3.7C4 20.0002 4.3 19.7002 4.3 19.4002C4.3 19.1002 4 18.8002 3.7 18.8002Z"
        fill={fill}
      />
      <Path
        d="M19.4002 15.7002C19.1002 15.7002 18.8002 16.0002 18.8002 16.3002V18.8002H16.3002C16.0002 18.8002 15.7002 19.1002 15.7002 19.4002C15.7002 19.7002 16.0002 20.0002 16.3002 20.0002H19.4002C19.7002 20.0002 20.0002 19.7002 20.0002 19.4002V16.3002C20.0002 16.0002 19.7002 15.7002 19.4002 15.7002Z"
        fill={fill}
      />
      <Path
        d="M12.3002 8.1999H17.0002C17.3002 8.1999 17.6002 7.8999 17.6002 7.5999V2.9999C17.6002 2.6999 17.3002 2.3999 17.0002 2.3999H12.3002C12.0002 2.3999 11.7002 2.6999 11.7002 2.9999V7.6999C11.8002 7.9999 12.0002 8.1999 12.3002 8.1999ZM12.9002 3.5999H16.4002V7.0999H12.9002V3.5999Z"
        fill={fill}
      />
      <Path
        d="M7.6999 11.7998H2.9999C2.6999 11.7998 2.3999 12.0998 2.3999 12.3998V16.9998C2.3999 17.2998 2.6999 17.5998 2.9999 17.5998H7.6999C7.9999 17.5998 8.2999 17.2998 8.2999 16.9998V12.2998C8.1999 11.9998 7.9999 11.7998 7.6999 11.7998ZM7.0999 16.3998H3.5999V12.8998H7.0999V16.3998Z"
        fill={fill}
      />
      <Path
        d="M17.6002 17.0002V12.3002C17.6002 12.0002 17.3002 11.7002 17.0002 11.7002C16.7002 11.7002 16.4002 12.0002 16.4002 12.3002V16.4002H12.3002C12.0002 16.4002 11.7002 16.7002 11.7002 17.0002C11.7002 17.3002 12.0002 17.6002 12.3002 17.6002H17.0002C17.4002 17.6002 17.6002 17.4002 17.6002 17.0002Z"
        fill={fill}
      />
      <Path
        d="M7.6999 2.3999H2.9999C2.5999 2.3999 2.3999 2.5999 2.3999 2.9999V7.6999C2.3999 7.9999 2.5999 8.1999 2.9999 8.1999H7.6999C7.9999 8.1999 8.1999 7.9999 8.1999 7.6999V2.9999C8.1999 2.5999 7.9999 2.3999 7.6999 2.3999ZM7.0999 7.0999H3.5999V3.5999H7.0999V7.0999Z"
        fill={fill}
      />
      <Path
        d="M9.9999 8.1999C10.2999 8.1999 10.5999 7.8999 10.5999 7.5999V2.9999C10.5999 2.6999 10.2999 2.3999 9.9999 2.3999C9.6999 2.3999 9.3999 2.5999 9.3999 2.9999V7.6999C9.3999 7.9999 9.6999 8.1999 9.9999 8.1999Z"
        fill={fill}
      />
      <Path
        d="M14.0999 9.9999C14.0999 9.6999 13.7999 9.3999 13.4999 9.3999H9.9999C9.6999 9.3999 9.3999 9.6999 9.3999 9.9999V16.9999C9.3999 17.2999 9.6999 17.5999 9.9999 17.5999C10.2999 17.5999 10.5999 17.2999 10.5999 16.9999V10.5999H13.4999C13.7999 10.5999 14.0999 10.2999 14.0999 9.9999Z"
        fill={fill}
      />
      <Path
        d="M2.9999 10.5999H4.1999C4.4999 10.5999 4.7999 10.2999 4.7999 9.9999C4.7999 9.6999 4.4999 9.3999 4.0999 9.3999H2.9999C2.6999 9.3999 2.3999 9.6999 2.3999 9.9999C2.3999 10.2999 2.5999 10.5999 2.9999 10.5999Z"
        fill={fill}
      />
      <Path
        d="M14.1001 12.3002V14.6002C14.1001 14.9002 14.4001 15.2002 14.7001 15.2002C15.0001 15.2002 15.3001 14.9002 15.3001 14.6002V12.3002C15.3001 12.0002 15.0001 11.7002 14.7001 11.7002C14.4001 11.8002 14.1001 12.0002 14.1001 12.3002Z"
        fill={fill}
      />
      <Path
        d="M11.7998 12.3002V14.6002C11.7998 14.9002 12.0998 15.2002 12.3998 15.2002C12.6998 15.2002 12.9998 14.9002 12.9998 14.6002V12.3002C12.9998 12.0002 12.6998 11.7002 12.3998 11.7002C12.0998 11.7002 11.7998 12.0002 11.7998 12.3002Z"
        fill={fill}
      />
      <Path
        d="M17.0002 9.3999H15.8002C15.5002 9.3999 15.2002 9.6999 15.2002 9.9999C15.2002 10.2999 15.5002 10.5999 15.8002 10.5999H17.0002C17.3002 10.5999 17.6002 10.2999 17.6002 9.9999C17.6002 9.6999 17.4002 9.3999 17.0002 9.3999Z"
        fill={fill}
      />
      <Path
        d="M14.7001 4.7002C15.0001 4.7002 15.3001 5.0002 15.3001 5.3002C15.3001 5.6002 15.0001 5.9002 14.7001 5.9002C14.4001 5.9002 14.1001 5.6002 14.1001 5.3002C14.1001 5.0002 14.4001 4.7002 14.7001 4.7002Z"
        fill={fill}
      />
      <Path
        d="M5.3002 4.7002C5.6002 4.7002 5.9002 5.0002 5.9002 5.3002C5.9002 5.6002 5.6002 5.9002 5.3002 5.9002C5.0002 5.9002 4.7002 5.6002 4.7002 5.3002C4.7002 5.0002 5.0002 4.7002 5.3002 4.7002Z"
        fill={fill}
      />
      <Path
        d="M5.3002 14.1001C5.6002 14.1001 5.9002 14.4001 5.9002 14.7001C5.9002 15.0001 5.6002 15.3001 5.3002 15.3001C5.0002 15.3001 4.7002 15.0001 4.7002 14.7001C4.7002 14.4001 5.0002 14.1001 5.3002 14.1001Z"
        fill={fill}
      />
      <Path
        d="M7.6999 9.3999H6.4999C6.1999 9.3999 5.8999 9.6999 5.8999 9.9999C5.8999 10.2999 6.1999 10.5999 6.4999 10.5999H7.6999C7.9999 10.5999 8.2999 10.2999 8.2999 9.9999C8.2999 9.6999 7.9999 9.3999 7.6999 9.3999Z"
        fill={fill}
      />
    </Svg>
  )
}
