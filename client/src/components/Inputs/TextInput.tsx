import React, { ChangeEvent } from "react";

type Props = {
  name: string;
  type?: string;
  placeholder: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  register?: any;
  className?: string;
};

export const baseInputStyles =
  "text-lg text-white bg-vBlackLight rounded outline-0 pt-6 pb-1 px-4";

export default function TextInput({
  name,
  placeholder,
  value,
  onChange,
  type = "text",
  className = "",
  register,
}: Props) {
  return register ? (
    <input
      {...register(name)}
      type={type}
      id={name}
      name={name}
      placeholder={placeholder}
      className={`${baseInputStyles} ${className}`}
    />
  ) : (
    <input
      type={type}
      id={name}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={baseInputStyles}
    />
  );
}
