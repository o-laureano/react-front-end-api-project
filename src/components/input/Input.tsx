import { forwardRef } from "react";
import { StyledInput } from "./Inputs.styles";
import { InputProps } from "./Input.types";

const Input = forwardRef<HTMLInputElement, InputProps>(({ ...props }, ref) => {
  return <StyledInput ref={ref} {...props} />;
});

export default Input;
