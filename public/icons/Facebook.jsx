import * as React from "react";
const Facebook = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 0 256 256"
    {...props}
  >
    <defs>
      <linearGradient
        id="a"
        x1={9.993}
        x2={40.615}
        y1={9.993}
        y2={40.615}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#2aa4f4" />
        <stop offset={1} stopColor="#007ad9" />
      </linearGradient>
    </defs>
    <g
      fill="none"
      strokeMiterlimit={10}
      fontFamily="none"
      fontSize="none"
      fontWeight="none"
      style={{
        mixBlendMode: "normal",
      }}
      textAnchor="none"
    >
      <path
        fill="url(#a)"
        d="M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20S35.046 4 24 4z"
        transform="scale(5.33333)"
      />
      <path
        fill="#fff"
        d="M142.437 156.272h27.606l4.336-28.043h-31.942v-15.328c0-11.648 3.808-21.978 14.704-21.978h17.51v-24.47c-3.078-.416-9.584-1.322-21.878-1.322-25.674 0-40.725 13.557-40.725 44.448v18.656H85.653v28.042h26.39v77.078c5.226.778 10.522 1.312 15.957 1.312 4.912 0 9.707-.448 14.437-1.088z"
      />
    </g>
  </svg>
);
export default Facebook;
