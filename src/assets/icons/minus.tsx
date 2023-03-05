import React from 'react';
import Svg, { Path } from 'react-native-svg';

export const MinusIcon = ({ width = 14, height = 2, fill = '#28303F' }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 14 2" fill="none">
      <Path
        d="M13 1.75C13.4142 1.75 13.75 1.41421 13.75 1C13.75 0.585787 13.4142 0.25 13 0.25V1.75ZM1 0.25C0.585786 0.25 0.25 0.585786 0.25 1C0.25 1.41421 0.585786 1.75 1 1.75L1 0.25ZM13 0.25L1 0.25L1 1.75L13 1.75V0.25Z"
        fill={fill}
      />
    </Svg>
  );
};
