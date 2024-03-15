import React from "react";

interface props {
  value?: string;
  placeHolder: string;
  className: string;
  type?: "text";
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onFocuse?:  React.FocusEventHandler<HTMLInputElement>;
  onBlur?:  React.FocusEventHandler<HTMLInputElement>;
  error?: boolean;
}

const Input = ({
  value = "",
  placeHolder,
  className,
  type = "text",
  onChange,
  error = false,
  onBlur,
  onFocuse
}: props) => {
  return (
    <input
      type={type}
      value={value}
      className={`${className} ${error && "border-2 border-solid border-red-600 text-red-600"}`}
      placeholder={placeHolder}
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocuse}
    />
  );
};

export default Input;
