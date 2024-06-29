import React from "react";
import { StyledButton } from "./Button.styles";
import { ButtonProps } from "./Button.types";

const Button: React.FC<ButtonProps> = ({ children, disabled, onClick }) => {
  return (
    <StyledButton disabled={disabled} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
