// src/components/Input/Input.tsx
import React from "react";
import { StyledInput } from "./Inputs.styles";
import { InputProps } from "./Input.types";

const Input: React.FC<InputProps> = ({ type, placeholder }) => {
  return <StyledInput type={type} placeholder={placeholder} />;
};

export default Input;
