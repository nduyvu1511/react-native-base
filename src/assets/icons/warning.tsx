import React from 'react'
import Svg, { Circle, Path } from 'react-native-svg'

export const WarningIcon = ({ size = 68, fill = '#ED9526' }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 68 68" fill="none">
      <Circle opacity="0.1" r="33.3333" transform="matrix(-1 0 0 1 33.9538 33.9994)" fill={fill} />
      <Path
        d="M37.2878 50.6667C37.2878 48.8257 35.7954 47.3333 33.9544 47.3333C32.1135 47.3333 30.6211 48.8257 30.6211 50.6667C30.6211 52.5076 32.1135 54 33.9544 54C35.7954 54 37.2878 52.5076 37.2878 50.6667Z"
        fill={fill}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M33.9531 43.166C35.3338 43.166 36.4531 42.0467 36.4531 40.666L36.4531 17.3327C36.4531 15.952 35.3338 14.8327 33.9531 14.8327C32.5724 14.8327 31.4531 15.952 31.4531 17.3327L31.4531 40.666C31.4531 42.0467 32.5724 43.166 33.9531 43.166Z"
        fill={fill}
      />
    </Svg>
  )
}
