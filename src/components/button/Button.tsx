import React from "react";
import { StyledButton } from "./Button.styles";
import { ButtonProps } from "./Button.types";

const Button: React.FC<ButtonProps> = ({ children, disabled }) => {
  return (
    <StyledButton disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export default Button;
