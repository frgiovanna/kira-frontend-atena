import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import { Menu, Typography } from "@mui/material";
import * as Styles from "./styles";

export default function ProfileHeader() {
  return (
    <Styles.ProfileHeader>
      <Styles.Wrapper>
        <Styles.Icon>
          <AccountCircleIcon style={{ color: "white" }} fontSize="large" />
        </Styles.Icon>
        <Styles.TextWrapper>
          <Typography variant="body2" color="text.secondary" lineHeight="16px">
            boa tarde!
            <br />
            olha só o que eu separei para você hoje
          </Typography>
        </Styles.TextWrapper>
      </Styles.Wrapper>
      <MenuIcon fontSize="large" />
    </Styles.ProfileHeader>
  );
}
