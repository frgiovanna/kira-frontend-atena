import { Typography } from "@mui/material";
import styled from "@emotion/styled";

export const Card = styled.div`
  background: ${(props) =>
    props.secondary
      ? "linear-gradient(354.34deg,#9c1aeb 4.51%,#5e00ff 95.49%)"
      : "linear-gradient(354.34deg, #eb1a29 4.51%, #ff00bc 95.49%)"};

  box-shadow: 4px 4px 8px rgb(0 0 0 / 25%);
  border-radius: 32px 0;
  padding: 10px;
  color: white;
  margin-top: 16px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Button = styled.a`
  display: block;
  width: fit-content;
  padding-left: 14px;
  padding-right: 28px;
  font-size: 12px;
  color: ${(props) => (props.secondary ? "#8b13cd" : "#f62459")};
  text-decoration: none;
  background: linear-gradient(180deg, #fff 0, #ecf1f4 100%);
  margin: 0 !important;
  text-align: center;
  border-radius: 0 0 32px 0;
  box-shadow: 0 4px 4px rgb(0 0 0 / 25%);
  line-height: 2rem;
  max-width: 18.75rem;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  background: linear-gradient(180deg, #fff 0, #ecf1f4 100%);
  border-radius: 32px 0;
  margin: 14px -10px -10px -11px;
  padding: 16px;
`;

export const Item = styled.div`
  max-width: 120px;
`;

export const FooterTitle = styled(Typography)`
  font-size: 12px;
  line-height: 12px;
`;
