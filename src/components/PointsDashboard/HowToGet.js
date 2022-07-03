import React from "react";

import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import IosShareRoundedIcon from "@mui/icons-material/IosShareRounded";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import * as Styles from "./styles";

export default function HowToGet() {
  return (
    <>
      <Styles.Item>
        <Styles.TitleWrapper>
          <CalendarMonthIcon color="primary" sx={{ fontSize: "40px" }} />
          <Styles.Title color="text.secondary">
            Deixe seu calendário menstrual atualizado
            <br />
            <strong>100 pontos</strong>
          </Styles.Title>
        </Styles.TitleWrapper>
      </Styles.Item>
      <Styles.Item>
        <Styles.TitleWrapper>
          <ShoppingCartIcon color="primary" sx={{ fontSize: "40px" }} />
          <Styles.Title color="text.secondary">
            Preencher como se sente hoje
            <br />
            <strong>50 pontos</strong>
          </Styles.Title>
        </Styles.TitleWrapper>
      </Styles.Item>
      <Styles.Item>
        <Styles.TitleWrapper>
          <AddCircleRoundedIcon color="primary" sx={{ fontSize: "40px" }} />
          <Styles.Title color="text.secondary">
            Faça uma compra
            <br />
            <strong>100 pontos</strong>
          </Styles.Title>
        </Styles.TitleWrapper>
      </Styles.Item>
      <Styles.Item>
        <Styles.TitleWrapper>
          <LibraryBooksIcon color="primary" sx={{ fontSize: "40px" }} />
          <Styles.Title color="text.secondary">
            Interaja com os artigos
            <br />
            <strong>10 pontos</strong>
          </Styles.Title>
        </Styles.TitleWrapper>
      </Styles.Item>
      <Styles.Item>
        <Styles.TitleWrapper>
          <IosShareRoundedIcon color="primary" sx={{ fontSize: "40px" }} />
          <Styles.Title color="text.secondary">
            Compartilhe um conteúdo
            <br />
            <strong>15 pontos</strong>
          </Styles.Title>
        </Styles.TitleWrapper>
      </Styles.Item>
    </>
  );
}
