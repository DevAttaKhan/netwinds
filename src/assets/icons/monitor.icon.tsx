import React from "react";

type Props = {
  width?: number;
  height?: number;
};

export const MonitorIcon: React.FC<Props> = ({ width = 130, height = 122 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 130 122"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M65 92.6667V116M83.6666 22.0833L78.4166 19.75M83.6666 34.9167L78.4166 37.25M93.5833 12.1667L91.25 6.91666M93.5833 44.8333L91.25 50.0833M108.75 6.91666L106.417 12.1667M108.75 50.0833L106.417 44.8333M121.583 19.75L116.333 22.0833M121.583 37.25L116.333 34.9167M123.333 69.3333V81C123.333 84.0942 122.104 87.0616 119.916 89.2496C117.728 91.4375 114.761 92.6667 111.667 92.6667H18.3333C15.2391 92.6667 12.2716 91.4375 10.0837 89.2496C7.89579 87.0616 6.66663 84.0942 6.66663 81V22.6667C6.66663 19.5725 7.89579 16.605 10.0837 14.4171C12.2716 12.2292 15.2391 11 18.3333 11H59.1666M41.6666 116H88.3333M117.5 28.5C117.5 38.165 109.665 46 100 46C90.335 46 82.5 38.165 82.5 28.5C82.5 18.835 90.335 11 100 11C109.665 11 117.5 18.835 117.5 28.5Z"
        stroke="url(#paint0_linear_68_23)"
        stroke-width="12"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_68_23"
          x1="103.562"
          y1="116"
          x2="9.55573"
          y2="98.7113"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#A4508B" />
          <stop offset="0.74" stop-color="#5F0A87" />
        </linearGradient>
      </defs>
    </svg>
  );
};
