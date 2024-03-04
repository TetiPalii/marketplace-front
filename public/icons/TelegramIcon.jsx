import * as React from "react"
const TelegramIcon = (props) => (
  <svg
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  width="56"
  height="56"
  fill="none"
  {...props}
>
  <rect width={56} height={56} fill="url(#a)" rx={50} />
  <defs>
    <pattern
      id="a"
      width={1}
      height={1}
      patternContentUnits="objectBoundingBox"
    >
      <use xlinkHref="#b" transform="scale(.00195)" />
    </pattern>
    <image
      xlinkHref="data:image/png;base64,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"
      id="b"
     
    />
  </defs>
</svg>
)
export default TelegramIcon