import styled from "styled-components";
import { ButtonProps } from "./Pagination.types";

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Button = styled.button<ButtonProps>`
  display: flex;
  width: 32px;
  height: 32px;
  padding: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  border-radius: 8px;
  border: 1px solid ${(props) => (props.enabled ? "#1DB954" : "#5A5A5A")};
  background: ${(props) =>
    props.enabled ? "rgba(29, 185, 84, 0.20)" : "rgba(52, 52, 52, 0.20)"};
  cursor: ${(props) => (props.enabled ? "pointer" : "not-allowed")};

  &:hover {
    background-color: ${(props) =>
      props.enabled ? "rgba(29, 185, 84, 0.30)" : "rgba(52, 52, 52, 0.30)"};
  }
`;

export const PageNumber = styled.span`
  font-size: 16px;
  font-weight: bold;
  margin: 0 8px;
`;
