import React from "react";
import Image from "next/image";
import * as Styles from "./styles";

export default function Card() {
  return (
    <Styles.Card>
      <Styles.TitleWrapper>
        <Image
          alt="calendar icon"
          src={"/calendar.svg"}
          width={20}
          height={20}
        />
        <h3>calendário menstrual</h3>
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
