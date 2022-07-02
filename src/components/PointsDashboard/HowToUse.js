import React from "react";

import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import IosShareRoundedIcon from "@mui/icons-material/IosShareRounded";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import * as Styles from "./styles";
import Image from "next/image";

export default function HowToUse() {
  return (
    <>
      <Styles.Item>
        <Styles.TitleWrapper>
          <Image src="/intimus.png" alt="Intimus logo" width={40} height={30} />

          <Styles.Title>
            Frete grátis em qualquer produto intimus (500 pontos)
          </Styles.Title>
        </Styles.TitleWrapper>
      </Styles.Item>
      <Styles.Item>
        <Styles.TitleWrapper>
          <Image src="/intimus.png" alt="Intimus logo" width={40} height={30} />
          <Styles.Title>
            40% de desconto em qualquer produto intimus (700 pontos)
          </Styles.Title>
        </Styles.TitleWrapper>
      </Styles.Item>
      <Styles.Item>
        <Styles.TitleWrapper>
          <Image src="/shein.png" alt="Shein logo" width={50} height={50} />
          <Styles.Title>
            Cupons de 10% de desconto na Shein (1000 pontos)
          </Styles.Title>
        </Styles.TitleWrapper>
      </Styles.Item>
      <Styles.Item>
        <Styles.TitleWrapper>
          <Image src="/ifood.png" alt="Ifood logo" width={40} height={40} />
          <Styles.Title>Cupons de 10 reais no ifood (1500 pontos)</Styles.Title>
        </Styles.TitleWrapper>
      </Styles.Item>
      <Styles.Item>
        <Styles.TitleWrapper>
          <Image src="/netflix.png" alt="Netflix logo" width={40} height={40} />
          <Styles.Title>Um mês grátis de netflix (2000 pontos)</Styles.Title>
        </Styles.TitleWrapper>
      </Styles.Item>
      <Styles.Item>
        <Styles.TitleWrapper>
          <Image src="/spotify.png" alt="Spotify logo" width={40} height={40} />
          <Styles.Title>Um mês grátis de spotify (2000 pontos)</Styles.Title>
        </Styles.TitleWrapper>
      </Styles.Item>
    </>
  );
}
