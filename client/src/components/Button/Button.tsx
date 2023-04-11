import React, { memo, useMemo } from "react";
import Spinner from "../Spinner/Spinner";

type Props = {
  type?: "button" | "submit" | "reset" | undefined;
  variant?: "primary" | "secondary";
  size?: "sm" | "md";
  onClick: () => any;
  isLoading?: boolean;
  disabled?: boolean;
  buttonStyles?: string;
  isActive?: boolean;
  children: React.ReactNode;
};

const buttonSize = {
  sm: "h-10",
  md: "h-14",
};

function Button({
  type = "button",
  variant = "primary",
  size = "md",
  onClick,
  isLoading = false,
  disabled = false,
  buttonStyles = "",
  isActive = true,
  children,
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
      type={type}
      className={`flex items-center justify-center text-base font-bold text-white py-1.5 px-4 rounded-md border-2 transition-all ${buttonVariants[variant]} ${buttonSize[size]} ${buttonStyles}`}
      onClick={onClick}
      disabled={disabled || isLoading}
    >
      {children}
      {isLoading && <Spinner className="ml-1.5" />}
    </button>
  );
}

export default memo(Button);
