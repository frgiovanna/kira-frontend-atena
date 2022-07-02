import { Typography } from "@mui/material";
import React from "react";
import * as Styles from "./styles";

export default function PointsCard() {
  return (
    <Styles.Box>
      <Typography color="text.secondary">Sua pontuação</Typography>
      <Typography variant="h3" color="primary">
        200 pontos
      </Typography>
      <Typography fontSize="12px" color="text.secondary">
        45 desses 200 pontos vencem em 19 dias
      </Typography>
    </Styles.Box>
  );
}
