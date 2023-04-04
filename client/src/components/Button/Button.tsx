import React, { memo, useMemo } from "react";

type Props = {
  variant?: "primary" | "secondary";
  size?: "sm" | "md";
  text: string;
  onClick: () => any;
  buttonStyles?: string;
  isActive?: boolean;
};

const buttonSize = {
  sm: "h-10",
  md: "h-14",
};

function Button({
  variant = "primary",
  size = "md",
  text,
  onClick,
  buttonStyles = "",
  isActive = true,
}: Props) {
  const buttonVariants = useMemo(() => {
    return {
      primary: `${
        isActive ? "bg-vRed border-vRed" : "bg-vGray border-vGray"
      } hover:bg-vRedLight hover:border-vRedLight`,
      secondary:
        "bg-transparent border-silver hover:text-vRed hover:border-vRed",
    };
  }, [isActive]);

  return (
    <button
      className={`flex items-center justify-center text-base font-bold text-white py-1.5 px-4 rounded-md border-2 transition-all ${buttonVariants[variant]} ${buttonSize[size]} ${buttonStyles}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default memo(Button);
