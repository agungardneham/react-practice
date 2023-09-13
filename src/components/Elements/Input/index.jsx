/* eslint-disable react/prop-types */
import { forwardRef } from "react";
import Input from "./Input";
import Label from "./Label";

const InputForm = forwardRef((props, ref) => {
  const { htmlFor, children, type, placeholder } = props;
  return (
    <div className="mb-6">
      <Label htmlFor={htmlFor}>{children}</Label>
      <Input
        type={type}
        placeholder={placeholder}
        name={htmlFor}
        ref={ref}
      ></Input>
    </div>
  );
});

InputForm.displayName = "InputForm";

export default InputForm;
