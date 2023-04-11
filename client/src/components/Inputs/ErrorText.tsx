import React from "react";

type Props = {
  text: string;
};

export const ErrorText = ({ text }: Props) => {
  return (
    <div className="flex items-center bg-vRed rounded opacity-80 py-0.5 px-1.5 mt-2.5">
      <p className="text-white">{text}</p>
    </div>
  );
};
