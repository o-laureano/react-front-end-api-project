import styled from "styled-components";

export const H1 = styled.h1`
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0;
`;

export const Description = styled.p`
  color: #9d9d9d;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: var(--Botes-Padding-Y, 8px);
  align-self: stretch;
`;

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  align-self: stretch;
`;

export const Label = styled.label`
  color: #fff;

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Error = styled.div`
  color: #ff4d4f;
  font-size: 14px;
`;
