import styled from "styled-components";

export const StyledSearchInput = styled.input`
  all: unset;

  display: flex;
  width: 160px;
  height: 40px;
  padding: 0px 12px;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  border: 1px solid #1db954;

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
