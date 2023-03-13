import * as React from "react";
import { SVGProps } from "react";
const SvgLactation = (props: SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 0C7.237 0 5 2.237 5 5s2.237 5 5 5c2.762 0 5-2.237 5-5s-2.238-5-5-5Zm2.5 5c0-1.375-1.125-2.5-2.5-2.5A2.507 2.507 0 0 0 7.5 5c0 1.375 1.125 2.5 2.5 2.5s2.5-1.125 2.5-2.5Zm5 11.25c-.25-.887-4.125-2.5-7.5-2.5s-7.25 1.613-7.5 2.512V17.5h15v-1.25Zm-17.5 0c0-3.325 6.662-5 10-5s10 1.675 10 5V20H0v-3.75Z"
      fill="#929094"
    />
  </svg>
);
export default SvgLactation;
