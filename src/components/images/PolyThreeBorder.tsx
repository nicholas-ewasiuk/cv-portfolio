import React, { SVGProps } from 'react';

export const PolyThreeBorder: React.FC<SVGProps<SVGSVGElement>> = ({ width = 1040, height = 600}) => {
  return (
    <svg width={width} height={height} version="1.1" viewBox="0 0 238.12 132.29" xmlns="http://www.w3.org/2000/svg">
      <g transform="matrix(1.3879 0 0 1.3879 -598.64 -465.02)">
        <path d="m600.2 424.95-12.023 4.2718-146.91-1.6083-4.2861-81.438 7.9747-8.0011 149.25-0.0339z" fill="#3e004a"/>
        <path d="m597.23 422.99-12.023 4.2718-146.91-1.6083-4.2861-81.438 7.9747-8.0011 149.25-0.034z" fill="#83ffcd"/>
      </g>
   </svg>
  );
};