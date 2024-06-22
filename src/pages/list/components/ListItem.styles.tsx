import styled from "styled-components";

export const ItemCard = styled.div`
  display: flex;
  padding: 8px;
  max-width: 256px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: #343434;
`;

export const ItemImage = styled.img`
  display: flex;
  width: 100%;
  padding: 12px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 8px;
  margin: 0;
`;

export const ItemInfo = styled.div`
  display: flex;
  padding: 8px 0px;
  justify-content: center;
  align-items: start;
  gap: 4px;
  align-self: stretch;
  flex-direction: column;
`;

export const ItemInfoHeader = styled.h1`
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  margin: 0;
`;

export const ItemInfoDescription = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  margin: 0;
`;
