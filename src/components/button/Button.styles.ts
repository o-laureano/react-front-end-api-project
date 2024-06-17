import styled from "styled-components";

export const StyledButton = styled.button`
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  background: #005ac3;
  border-radius: 8px;
  display: flex;
  height: 48px;
  padding: 16px;
  justify-content: center;
  align-items: center;
  gap: 32px;
  align-self: stretch;

  border: none;
  outline: none;

  &:disabled {
    color: #9d9d9d;
    background: rgba(157, 157, 157, 0.2);
  }
`;
