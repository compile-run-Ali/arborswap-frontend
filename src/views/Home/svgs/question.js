import * as React from "react"

const QuestionSVG = (props) => (
  <svg
    width={12}
    height={12}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      opacity={0.6}
      d="M6 0a6 6 0 1 0 6 6 6.006 6.006 0 0 0-6-6Zm0 10a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm.965-3.747a.991.991 0 0 0-.465.875V7.5a.5.5 0 0 1-1 0v-.372a1.977 1.977 0 0 1 .982-1.75A1 1 0 1 0 5 4.5a.5.5 0 0 1-1 0 2 2 0 1 1 2.965 1.753Z"
      fill="#A69F9F"
    />
  </svg>
)

export default QuestionSVG
