/* eslint-disable react/prop-types */
import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  const { type, placeholder, name } = props;
  return (
    <input
      className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder: opacity-50"
      placeholder={placeholder}
      type={type}
      name={name}
      id={name}
      ref={ref}
    />
  );
});

Input.displayName = "Input";

export default Input;
