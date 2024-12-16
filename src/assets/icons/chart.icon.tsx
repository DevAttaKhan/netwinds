type Props = {
  width?: number;
  height?: number;
};

export const ChartIcon: React.FC<Props> = ({ width = 70, height = 63 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 70 63"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M35 44.1667V60M47.6667 37.8333V60M60.3334 25.1667V60M66.6667 3L39.2877 30.379C39.1406 30.5265 38.9659 30.6434 38.7735 30.7233C38.5812 30.8031 38.375 30.8442 38.1667 30.8442C37.9584 30.8442 37.7522 30.8031 37.5599 30.7233C37.3675 30.6434 37.1928 30.5265 37.0457 30.379L26.621 19.9543C26.3241 19.6575 25.9215 19.4908 25.5016 19.4908C25.0818 19.4908 24.6791 19.6575 24.3822 19.9543L3.33337 41M9.66671 50.5V60M22.3334 37.8333V60"
        stroke="url(#paint0_linear_26_425)"
        stroke-width="6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_26_425"
          x1="55.9339"
          y1="60"
          x2="5.03378"
          y2="50.275"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#A4508B" />
          <stop offset="0.74" stop-color="#5F0A87" />
        </linearGradient>
      </defs>
    </svg>
  );
};
