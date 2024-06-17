import React from "react";
import { StyledBox } from "./Box.styles";
import { BoxProps } from "./Box.types";

const Box: React.FC<BoxProps> = ({ children }) => {
  return <StyledBox>{children}</StyledBox>;
};

export default Box;
