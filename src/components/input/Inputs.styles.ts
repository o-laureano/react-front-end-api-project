import styled from "styled-components";

export const StyledInput = styled.input`
  all: unset;

  display: flex;
  height: 40px;
  padding: 0 16px;
  align-items: center;
  gap: 32px;
  align-self: stretch;
  color: #131313;
  background: #fff;
  border-radius: 8px;

  &::placeholder {
    color: #9d9d9d;
    font-size: 14px;
    font-weight: 400;
  }

  &:focus {
    border-color: #005ac3;
    outline: none;
  }
`;
