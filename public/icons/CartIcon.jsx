import * as React from "react";
const CartIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width={24}
    height={24}
    {...props}
  >
    <path
      fill="#fff"
      d="M20.733 17.333c1 0 1.88-.547 2.333-1.373l4.773-8.653c.493-.88-.147-1.973-1.16-1.973H6.946L5.693 2.667h-4.36v2.667H4l4.8 10.12L7 18.707c-.973 1.787.307 3.96 2.333 3.96h16V20h-16l1.467-2.667h9.933zM8.213 8h16.2l-3.68 6.667h-9.36L8.213 8zm1.12 16c-1.467 0-2.653 1.2-2.653 2.667s1.187 2.667 2.653 2.667c1.467 0 2.667-1.2 2.667-2.667S10.8 24 9.333 24zm13.334 0c-1.467 0-2.653 1.2-2.653 2.667s1.187 2.667 2.653 2.667c1.467 0 2.667-1.2 2.667-2.667S24.134 24 22.667 24z"
    />
  </svg>
);
export default CartIcon;
