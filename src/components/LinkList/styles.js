import { Button as MUIButton, Typography } from "@mui/material";
import styled from "@emotion/styled";

export const TitleWrapper = styled.div`
  display: flex;
`;

export const Item = styled.section`
  margin-top: 24px;
`;

export const Title = styled(Typography)`
  margin-left: 10px;
`;

export const Description = styled(Typography)`
  margin: 10px 0 10px 0;
  line-height: 16px;
`;

export const Button = styled(MUIButton)`
  font-size: 10px;
`;
