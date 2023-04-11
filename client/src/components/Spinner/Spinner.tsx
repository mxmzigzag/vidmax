import React from "react";

type Props = {
  size?: number;
  className?: string;
};

function Spinner({ size = 24, className = "" }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      className={className}
    >
      <circle
        cx="50"
        cy="50"
        fill="none"
        stroke="#ffffff"
        strokeWidth="4"
        r="35"
        strokeDasharray="164.93361431346415 56.97787143782138"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          repeatCount="indefinite"
          dur="1s"
          values="0 50 50;360 50 50"
          keyTimes="0;1"
        ></animateTransform>
      </circle>
    </svg>
  );
}

export default Spinner;
