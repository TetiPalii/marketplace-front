import * as React from "react";
const FilledRightArrow = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
    <path
      fill="#161c2a"
      d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z"
      style={{
        fill: "var(--color1, #161c2a)",
      }}
    />
    <path
      fill="#fff"
      d="M12 22.12 18.107 16 12 9.88 13.88 8l8 8-8 8L12 22.12z"
      style={{
        fill: "var(--color2, #fff)",
      }}
    />
  </svg>
);
export default FilledRightArrow;
