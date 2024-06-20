import styled from "styled-components";

export const ItemCard = styled.div`
  display: flex;
  padding: 8px;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background: #343434;
`;

export const ItemImage = styled.img`
  display: flex;
  width: 240px;
  height: 240px;
  padding: 12px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 8px;
`;

export const ItemInfo = styled.img`
  display: flex;
  padding: 8px 0px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
`;
