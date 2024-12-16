type Props = {
  width?: number;
  height?: number;
};

export const BulbIcon: React.FC<Props> = ({ width = 45, height = 70 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 45 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M32 41.3334C32.6333 38.1667 34.2167 35.95 36.75 33.4167C39.9167 30.5667 41.5 26.45 41.5 22.3334C41.5 17.2943 39.4982 12.4615 35.935 8.89834C32.3718 5.33515 27.5391 3.33337 22.5 3.33337C17.4609 3.33337 12.6282 5.33515 9.06497 8.89834C5.50178 12.4615 3.5 17.2943 3.5 22.3334C3.5 25.5 4.13333 29.3 8.25 33.4167C10.4667 35.6334 12.3667 38.1667 13 41.3334M13 54H32M16.1667 66.6667H28.8333"
        stroke="url(#paint0_linear_26_404)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_26_404"
          x1="35.0603"
          y1="66.6667"
          x2="3.73881"
          y2="63.4352"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A4508B" />
          <stop offset="0.74" stopColor="#5F0A87" />
        </linearGradient>
      </defs>
    </svg>
  );
};
