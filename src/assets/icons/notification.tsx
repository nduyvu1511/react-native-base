import { COLORS } from '@/theme'
import React from 'react'
import Svg, { Path } from 'react-native-svg'

export const NotificationIcon = ({ size = 24, fill = COLORS.gray50 }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M4.45549 13.88L3.88393 13.3944H3.88393L4.45549 13.88ZM5.33476 11.8385L4.58953 11.7541L5.33476 11.8385ZM18.6652 11.8385L19.4105 11.7541L18.6652 11.8385ZM19.5445 13.88L20.1161 13.3944L19.5445 13.88ZM18.3204 8.79403L17.5751 8.87846V8.87846L18.3204 8.79403ZM5.67964 8.79403L6.42487 8.87846L5.67964 8.79403ZM15.7023 19.2632C15.8477 18.8753 15.6511 18.4431 15.2632 18.2977C14.8753 18.1523 14.4431 18.3489 14.2977 18.7368L15.7023 19.2632ZM9.7023 18.7368C9.55694 18.3489 9.12467 18.1523 8.7368 18.2977C8.34893 18.4431 8.15234 18.8753 8.2977 19.2632L9.7023 18.7368ZM18.1699 16.25H5.83014V17.75H18.1699V16.25ZM17.5751 8.87846L17.92 11.9229L19.4105 11.7541L19.0656 8.70961L17.5751 8.87846ZM6.07999 11.9229L6.42487 8.87846L4.9344 8.70961L4.58953 11.7541L6.07999 11.9229ZM5.02706 14.3657C5.61173 13.6775 5.97775 12.8255 6.07999 11.9229L4.58953 11.7541C4.52038 12.3645 4.2732 12.9363 3.88393 13.3944L5.02706 14.3657ZM17.92 11.9229C18.0223 12.8255 18.3883 13.6775 18.9729 14.3657L20.1161 13.3944C19.7268 12.9363 19.4796 12.3645 19.4105 11.7541L17.92 11.9229ZM5.83014 16.25C4.94335 16.25 4.37926 15.1281 5.02706 14.3657L3.88393 13.3944C2.46491 15.0647 3.57828 17.75 5.83014 17.75V16.25ZM18.1699 17.75C20.4217 17.75 21.5351 15.0647 20.1161 13.3944L18.9729 14.3657C19.6207 15.1281 19.0567 16.25 18.1699 16.25V17.75ZM19.0656 8.70961C18.6504 5.04473 15.6279 2.25 12 2.25V3.75C14.8302 3.75 17.2419 5.93698 17.5751 8.87846L19.0656 8.70961ZM6.42487 8.87846C6.75808 5.93698 9.16977 3.75 12 3.75V2.25C8.37212 2.25 5.34956 5.04473 4.9344 8.70961L6.42487 8.87846ZM14.2977 18.7368C13.975 19.5979 13.0846 20.25 12 20.25V21.75C13.6855 21.75 15.1516 20.7325 15.7023 19.2632L14.2977 18.7368ZM12 20.25C10.9154 20.25 10.025 19.5979 9.7023 18.7368L8.2977 19.2632C8.84835 20.7325 10.3145 21.75 12 21.75V20.25Z"
        fill={fill}
      />
    </Svg>
  )
}