import * as React from 'react'

const LaunchpadSVG = (props) => (
  <svg width={20} height={20} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.616 2.743a8.102 8.102 0 0 0-2.915 6.224v4.982h8.102V8.967a8.102 8.102 0 0 0-2.915-6.224l-.704-.587a.675.675 0 0 0-.864 0l-.704.587Zm1.136 5.13a1.35 1.35 0 1 0 0-2.7 1.35 1.35 0 0 0 0 2.7Z"
    />
    <path
      opacity={0.48}
      d="M3 13.667a2.82 2.82 0 0 1 1.56-2.523l1.14-.57v3.375H3.283A.282.282 0 0 1 3 13.667ZM16.503 13.667a2.82 2.82 0 0 0-1.559-2.523l-1.141-.57v3.375h2.418a.282.282 0 0 0 .282-.282ZM7.727 15.299h4.05c0 .843-.421 1.631-1.123 2.1l-.902.6-.902-.6a2.523 2.523 0 0 1-1.123-2.1Z"
    />
  </svg>
)

export default LaunchpadSVG
