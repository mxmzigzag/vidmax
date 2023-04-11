import React, { ChangeEvent } from "react";

import Input from "./TextInput";
import TextareaInput from "./TextareaInput";
import { ErrorText } from "./ErrorText";

type Props = {
  label: string;
  name: string;
  type?: "text" | "textarea" | "password";
  placeholder: string;
  value?: string;
  error?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  className?: string;
  fullWidth?: boolean;
  register?: any;
};

export default function InputGroup({
  label,
  name,
  type = "text",
  placeholder,
  value,
  error,
  onChange,
  className,
  fullWidth = true,
  register,
}: Props) {
  return (
    <div
      className={`relative flex flex-col mb-4 w-full ${
        !fullWidth
          ? "lg:w-1/2 lg:[&:nth-child(2n)]:pr-4 lg:[&:nth-child(2n-1)]:pl-4"
          : ""
      } ${className}`}
    >
      <label
        htmlFor={name}
        className="absolute top-0 left-0 text-sm text-slate-200 border border-slate-200 rounded-tl rounded-br px-1"
      >
        {label}
      </label>
      {type === "text" || type === "password" ? (
        <Input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          register={register}
        />
      ) : (
        <TextareaInput
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          register={register}
        />
      )}
      {error && <ErrorText text={error} />}
    </div>
  );
}
