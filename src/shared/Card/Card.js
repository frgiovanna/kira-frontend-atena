import React from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Typography } from "@mui/material";
import * as Styles from "./styles";

export default function Card() {
  return (
    <Styles.Card>
      <Styles.TitleWrapper>
        <CalendarMonthIcon />
        <Typography variant="h6">calendário menstrual</Typography>
      </Styles.TitleWrapper>
      <p>
        insira os dados do seu ciclo menstrual
        <br />
        para acompanhar todos os detalhes!
      </p>
      <Styles.Button href="/periodcalendar">criar meu calendário</Styles.Button>
    </Styles.Card>
  );
}
