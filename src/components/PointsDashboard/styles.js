import styled from "styled-components";
import { Button as MUIButton, Typography } from "@mui/material";

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Item = styled.section`
  margin-bottom: 36px;
`;

export const Title = styled(Typography).attrs({
  color: "text.secondary",
})`
  font-size: 16px;
  margin-left: 10px;
`;

export const Description = styled(Typography).attrs({
  color: "primary",
  variant: "body2",
  color: "text.secondary",
})`
  margin: 10px 0 10px 0;
  line-height: 16px;
`;

export const Button = styled(MUIButton).attrs({
  color: "primary",
  size: "small",
})`
  font-size: 10px;
`;

export const Box = styled.div`
  display: "flex";
  width: 100%;
  background-color: white;
`;

export const HowToGetSection = styled.section`
  width: 100%;
  padding: 12px;
  cursor: pointer;
  box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.2);
  ${(props) =>
    props.value === "howToGet"
      ? "background-color: #f62459; color: white"
      : "background-color: white; color: #f62459"};
`;

export const HowToUseSection = styled.section`
  width: 100%;
  cursor: pointer;
  padding: 12px;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2);
  ${(props) =>
    props.value === "howToGet"
      ? "background-color: #white; color: #f62459"
      : "background-color: #f62459; color: white"};
`;
