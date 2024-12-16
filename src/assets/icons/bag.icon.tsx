import React from "react";

type Props = {
  width?: number;
  height?: number;
};
export const BagIcon: React.FC<Props> = ({ width = 118, height = 130 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 118 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.5 30L24 6.66666H94L111.5 30M6.5 30V111.667C6.5 114.761 7.72916 117.728 9.91709 119.916C12.105 122.104 15.0725 123.333 18.1667 123.333H99.8333C102.928 123.333 105.895 122.104 108.083 119.916C110.271 117.728 111.5 114.761 111.5 111.667V30M6.5 30H111.5M82.3333 53.3333C82.3333 59.5217 79.875 65.4566 75.4992 69.8325C71.1233 74.2083 65.1884 76.6667 59 76.6667C52.8116 76.6667 46.8767 74.2083 42.5008 69.8325C38.125 65.4566 35.6667 59.5217 35.6667 53.3333"
        stroke="url(#paint0_linear_68_36)"
        stroke-width="12"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_68_36"
          x1="93.7061"
          y1="123.333"
          x2="8.28449"
          y2="110.114"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#A4508B" />
          <stop offset="0.74" stop-color="#5F0A87" />
        </linearGradient>
      </defs>
    </svg>
  );
};
