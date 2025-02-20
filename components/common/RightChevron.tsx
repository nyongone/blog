import React from "react";

interface Props {
  fill?: string;
}

const RightChevron = ({ fill }: Props) => {
  return (
    <svg
      fill={fill || "#000"}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
    >
      <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
    </svg>
  );
};

export default RightChevron;
