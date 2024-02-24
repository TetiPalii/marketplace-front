import * as React from "react";
const FilledLeftArrowIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
    <path
      fill="#161c2a"
      d="M0 16c0 8.837 7.163 16 16 16s16-7.163 16-16S24.837 0 16 0 0 7.163 0 16z"
      style={{
        fill: "var(--color1, #161c2a)",
      }}
    />
    <path
      fill="#fff"
      d="M20 22.12 13.893 16 20 9.88 18.12 8l-8 8 8 8L20 22.12z"
      style={{
        fill: "var(--color2, #fff)",
      }}
    />
  </svg>
);
export default FilledLeftArrowIcon;
