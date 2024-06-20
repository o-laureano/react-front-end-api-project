import React from "react";

interface ChevronProps {
  rotation?: number;
}

const Chevron: React.FC<ChevronProps> = ({ rotation = 0 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <path
        d="M1 1.5L6 6.5L11 1.5"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Chevron;
