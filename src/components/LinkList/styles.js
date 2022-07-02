import { Button as MUIButton, Typography } from "@mui/material";
import styled from "styled-components";

export const TitleWrapper = styled.div`
  display: flex;
`;

export const Item = styled.section`
  margin-top: 24px;
`;

export const Title = styled(Typography).attrs({
  color: "primary",
})`
  margin-left: 10px;
`;

export const Button = styled(MUIButton).attrs({
  color: "primary",
  size: "small",
})`
  font-size: 10px;
`;
