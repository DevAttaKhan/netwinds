type Props = {
  width?: number;
  height?: number;
};

export const PencilRulerIcon: React.FC<Props> = ({
  width = 70,
  height = 70,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 70 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M38.1666 19.1667L24.55 5.54998C23.1198 4.12675 21.1843 3.32776 19.1667 3.32776C17.149 3.32776 15.2135 4.12675 13.7833 5.54998L5.54998 13.7833C4.12675 15.2135 3.32776 17.149 3.32776 19.1667C3.32776 21.1843 4.12675 23.1198 5.54998 24.55L19.1667 38.1666M22.3333 16L28.6666 9.66665M54 47.6666L60.3333 41.3333M50.8333 31.8333L64.45 45.45C67.4266 48.4267 67.4266 53.24 64.45 56.2167L56.2167 64.45C53.24 67.4266 48.4267 67.4266 45.45 64.45L31.8333 50.8333M44.5 12.8333L57.1667 25.5M64.051 18.5713C65.7252 16.8975 66.666 14.6271 66.6663 12.2597C66.6666 9.89224 65.7264 7.62165 64.0526 5.9474C62.3787 4.27316 60.1084 3.33241 57.7409 3.33211C55.3735 3.33181 53.1029 4.27199 51.4286 5.94582L9.16632 48.2177C8.43108 48.9507 7.88734 49.8533 7.58298 50.846L3.39982 64.6273C3.31798 64.9012 3.31179 65.1921 3.38193 65.4692C3.45206 65.7463 3.5959 65.9992 3.79817 66.2012C4.00045 66.4031 4.25362 66.5465 4.53082 66.6162C4.80802 66.6859 5.09892 66.6793 5.37265 66.597L19.1572 62.417C20.1489 62.1154 21.0514 61.5749 21.7855 60.8431L64.051 18.5713Z"
        stroke="url(#paint0_linear_26_392)"
        stroke-width="6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_26_392"
          x1="55.946"
          y1="66.6825"
          x2="4.68573"
          y2="57.868"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#A4508B" />
          <stop offset="0.74" stop-color="#5F0A87" />
        </linearGradient>
      </defs>
    </svg>
  );
};
