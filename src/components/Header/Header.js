import React from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import MenuIcon from "@mui/icons-material/Menu";
import * as Styles from "./styles";
import { Typography } from "@mui/material";

export default function Header(props) {
  const router = useRouter();

  return (
    <Styles.Box>
      <div style={{ display: "flex", alignItems: "center" }}>
        <ArrowBackIosIcon
          fontSize="small"
          color="text.secondary"
          onClick={() => router.back()}
          sx={{ cursor: "pointer" }}
        />
        <Typography color="text.secondary">{props.title}</Typography>
      </div>
      <MenuIcon sx={{ cursor: "pointer" }} color="text.secondary" />
    </Styles.Box>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
