import React from "react";
import { useRouter } from "next/router";
import { Typography } from "@mui/material";
import WarningRoundedIcon from "@mui/icons-material/WarningRounded";

import * as Styles from "./styles";

export default function RegisterText() {
  const { push } = useRouter();
  return (
    <Styles.Box onClick={() => push("/register")}>
      <WarningRoundedIcon
        color="primary"
        sx={{ fontSize: 40, marginRight: "10px" }}
      />
      <Typography variant="body2" color="text.secondary">
        complete seu cadastro para aproveitar tudo o que o app oferece!
      </Typography>
    </Styles.Box>
  );
}
