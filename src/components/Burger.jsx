import * as React from "react";
const Burger = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="currentColor"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#fff"
        d="M11 23h18v-2H11v2Zm0 4h18v-2H11v2Zm0-8h18v-2H11v2Zm0-6v2h18v-2H11Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M8 8h24v24H8z" />
      </clipPath>
    </defs>
  </svg>
);
export default Burger;
