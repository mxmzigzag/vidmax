import React from "react";

type Props = {
  title: string;
  additionalContent: () => any;
};

export default function SectionTitle({ title, additionalContent }: Props) {
  return (
    <div className={borderGradientStyles}>
      <div className="flex flex-col relative">
        <span className="absolute opacity-100 -top-3 left-1/2 bg-vRed rounded-full h-2 w-2 -translate-x-1/2" />
        <h4 className="text-xl text-white uppercase">{title}</h4>
      </div>
      {additionalContent()}
    </div>
  );
}

const borderGradientStyles = `
  flex 
  items-center 
  justify-between 
  py-5 
  relative 
  before:absolute 
  before:left-0 
  before:bottom-0 
  before:h-0.5 
  before:w-full 
  before:rounded 
  before:bg-gradient-to-r 
  before:from-vRed 
  before:to-transparent
`;
