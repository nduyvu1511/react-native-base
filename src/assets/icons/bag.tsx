import { COLORS } from '@/theme'
import React from 'react'
import Svg, { Path } from 'react-native-svg'

export const BagIcon = ({ size = 24, fill = COLORS.gray50 }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path
        d="M12.8332 4.99984C12.8332 5.27598 13.057 5.49984 13.3332 5.49984C13.6093 5.49984 13.8332 5.27598 13.8332 4.99984H12.8332ZM6.1665 4.99984C6.1665 5.27598 6.39036 5.49984 6.6665 5.49984C6.94265 5.49984 7.1665 5.27598 7.1665 4.99984H6.1665ZM9.99984 2.1665C11.5646 2.1665 12.8332 3.43503 12.8332 4.99984H13.8332C13.8332 2.88275 12.1169 1.1665 9.99984 1.1665V2.1665ZM9.99984 1.1665C7.88275 1.1665 6.1665 2.88275 6.1665 4.99984H7.1665C7.1665 3.43503 8.43503 2.1665 9.99984 2.1665V1.1665Z"
        fill={fill}
      />
      <Path
        d="M2.96813 14.5866L3.46426 14.6486L2.96813 14.5866ZM17.0314 14.5866L16.5353 14.6486L17.0314 14.5866ZM16.1981 7.91988L16.6942 7.85787L16.1981 7.91988ZM3.80146 7.91988L3.30532 7.85787L3.80146 7.91988ZM7.10905 5.5H12.8905V4.5H7.10905V5.5ZM15.702 7.9819L16.5353 14.6486L17.5276 14.5245L16.6942 7.85787L15.702 7.9819ZM13.7238 17.8333H6.27572V18.8333H13.7238V17.8333ZM3.46426 14.6486L4.2976 7.9819L3.30532 7.85787L2.47199 14.5245L3.46426 14.6486ZM6.27572 17.8333C4.57147 17.8333 3.25288 16.3397 3.46426 14.6486L2.47199 14.5245C2.18599 16.8125 3.96998 18.8333 6.27572 18.8333V17.8333ZM16.5353 14.6486C16.7467 16.3397 15.4281 17.8333 13.7238 17.8333V18.8333C16.0296 18.8333 17.8136 16.8125 17.5276 14.5245L16.5353 14.6486ZM12.8905 5.5C14.3194 5.5 15.5247 6.56402 15.702 7.9819L16.6942 7.85787C16.4544 5.93956 14.8237 4.5 12.8905 4.5V5.5ZM7.10905 4.5C5.17581 4.5 3.54511 5.93956 3.30532 7.85787L4.2976 7.9819C4.47483 6.56402 5.68014 5.5 7.10905 5.5V4.5Z"
        fill={fill}
      />
      <Path
        d="M7.74723 12.8989C7.50721 12.7624 7.20194 12.8462 7.0654 13.0863C6.92886 13.3263 7.01274 13.6316 7.25277 13.7681L7.74723 12.8989ZM12.7456 13.769C12.9861 13.6334 13.0712 13.3285 12.9355 13.0879C12.7999 12.8474 12.495 12.7623 12.2544 12.898L12.7456 13.769ZM7.25277 13.7681C8.26241 14.3425 9.11354 14.6685 10.0021 14.6668C10.8898 14.6651 11.7394 14.3363 12.7456 13.769L12.2544 12.898C11.3002 13.4359 10.6316 13.6656 10.0002 13.6668C9.36974 13.668 8.70104 13.4415 7.74723 12.8989L7.25277 13.7681Z"
        fill={fill}
      />
    </Svg>
  )
}
