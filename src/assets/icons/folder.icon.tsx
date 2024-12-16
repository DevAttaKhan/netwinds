type Props = {
  width?: number;
  height?: number;
};

export const FolderIcon: React.FC<Props> = ({ width = 130, height = 112 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 130 112"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M53.3334 50.25L41.6667 64.8333L53.3334 79.4167M76.6667 50.25L88.3333 64.8333L76.6667 79.4167M111.667 105.667C114.761 105.667 117.728 104.437 119.916 102.25C122.104 100.062 123.333 97.0942 123.333 94V35.6667C123.333 32.5725 122.104 29.605 119.916 27.4171C117.728 25.2292 114.761 24 111.667 24H65.5834C63.6322 24.0191 61.7074 23.5486 59.9851 22.6314C58.2628 21.7142 56.7981 20.3797 55.725 18.75L51 11.75C49.9377 10.1369 48.4915 8.81279 46.7913 7.89648C45.091 6.98016 43.1898 6.50032 41.2584 6.5H18.3334C15.2392 6.5 12.2717 7.72916 10.0838 9.91709C7.89585 12.105 6.66669 15.0725 6.66669 18.1667V94C6.66669 97.0942 7.89585 100.062 10.0838 102.25C12.2717 104.437 15.2392 105.667 18.3334 105.667H111.667Z"
        stroke="url(#paint0_linear_14_56)"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_14_56"
          x1="103.562"
          y1="105.667"
          x2="10.1972"
          y2="86.7789"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A4508B" />
          <stop offset="0.74" stopColor="#5F0A87" />
        </linearGradient>
      </defs>
    </svg>
  );
};
