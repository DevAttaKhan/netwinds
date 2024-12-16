type Props = {
  width?: number;
  height?: number;
};

export const HeadphoneIcon: React.FC<Props> = ({ width = 63, height = 64 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 63 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 38.3333H12.5C14.1797 38.3333 15.7906 39.0006 16.9783 40.1883C18.1661 41.3761 18.8333 42.987 18.8333 44.6667V54.1667C18.8333 55.8464 18.1661 57.4573 16.9783 58.645C15.7906 59.8327 14.1797 60.5 12.5 60.5H9.33333C7.65363 60.5 6.04272 59.8327 4.85499 58.645C3.66726 57.4573 3 55.8464 3 54.1667V32C3 24.4413 6.00267 17.1922 11.3475 11.8475C16.6922 6.50267 23.9413 3.5 31.5 3.5C39.0587 3.5 46.3078 6.50267 51.6525 11.8475C56.9973 17.1922 60 24.4413 60 32V54.1667C60 55.8464 59.3327 57.4573 58.145 58.645C56.9573 59.8327 55.3464 60.5 53.6667 60.5H50.5C48.8203 60.5 47.2094 59.8327 46.0217 58.645C44.8339 57.4573 44.1667 55.8464 44.1667 54.1667V44.6667C44.1667 42.987 44.8339 41.3761 46.0217 40.1883C47.2094 39.0006 48.8203 38.3333 50.5 38.3333H60"
        stroke="url(#paint0_linear_26_430)"
        stroke-width="6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_26_430"
          x1="50.3404"
          y1="60.5"
          x2="4.22176"
          y2="52.5697"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#A4508B" />
          <stop offset="0.74" stop-color="#5F0A87" />
        </linearGradient>
      </defs>
    </svg>
  );
};
