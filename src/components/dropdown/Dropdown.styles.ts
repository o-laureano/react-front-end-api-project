import styled from "styled-components";

export const DropdownContainer = styled.div`
  display: flex;
  width: 160px;
  height: 40px;
  padding: 0px 12px;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  border: 1px solid #1db954;
  cursor: pointer;
`;

export const DropdownContent = styled.div`
  /* display: ${(props: { isOpen: boolean }) =>
    props.isOpen ? "block" : "none"}; */
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-top: 8px;
`;

export const DropdownButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const DropdownList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  border: 1px solid #1db954;
  border-radius: 8px;
  width: 100%;
  display: none;
`;

export const DropdownItem = styled.li`
  padding: 8px 12px;
  cursor: pointer;
`;

export const DropdownIcon = styled.span`
  font-size: 16px;
  margin-left: 8px;
`;
