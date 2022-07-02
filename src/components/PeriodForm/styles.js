import styled from "styled-components";
import { Typography } from "@mui/material";

export const InputLabel = styled(Typography).attrs({
  color: "text.secondary",
})`
  font-size: 14px;
  margin-top: 34px;
`;

export const Button = styled.button`
  cursor: pointer;
  width: 200px;
  padding: 8px 28px 8px 14px;
  font-size: 12px;
  color: white;
  border: none;
  background: linear-gradient(354.34deg, #eb1a29 4.51%, #ff00bc 95.49%);
  border-radius: 0 0 32px 0;
  box-shadow: 0 4px 4px rgb(0 0 0 / 25%);
`;

export const ButtonWrapper = styled.div`
  margin-top: 48px;
  display: flex;
  justify-content: center;
  width: 100%;
`;
