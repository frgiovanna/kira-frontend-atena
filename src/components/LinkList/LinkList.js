import React from "react";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ForumIcon from "@mui/icons-material/Forum";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import * as Styles from "./styles";

export default function LinkList() {
  return (
    <>
      <Styles.Item>
        <Styles.TitleWrapper>
          <LibraryBooksIcon color="primary" />
          <Styles.Title color="primary">conteúdo</Styles.Title>
        </Styles.TitleWrapper>
        <Styles.Description variant="body2" color="text.secondary">
          uma variedade de conteúdos sobre autoconhecimento feminino
        </Styles.Description>
        <Styles.Button
          color="primary"
          size="small"
          startIcon={<AddCircleRoundedIcon />}
        >
          meus assuntos de interesse
        </Styles.Button>
      </Styles.Item>
      <Styles.Item>
        <Styles.TitleWrapper>
          <ShoppingCartIcon color="primary" />
          <Styles.Title color="primary">shopping</Styles.Title>
        </Styles.TitleWrapper>
        <Styles.Description variant="body2" color="text.secondary">
          em nosso shopping você encontra produtos especiais. além disso, você
          também pode criar seus kits personalizados
        </Styles.Description>
        <Styles.Button
          color="primary"
          size="small"
          startIcon={<ShoppingCartIcon />}
        >
          visite agora!
        </Styles.Button>
      </Styles.Item>
      <Styles.Item>
        <Styles.TitleWrapper>
          <ForumIcon color="primary" />
          <Styles.Title color="primary">chama a Kira</Styles.Title>
        </Styles.TitleWrapper>
        <Styles.Description variant="body2" color="text.secondary">
          dúvidas sobre saúde íntima? chama a Kira! aqui você encontra dúvidas
          já respondidas por ginecologistas
        </Styles.Description>
        <Styles.Button color="primary" size="small" startIcon={<ForumIcon />}>
          conheça mais
        </Styles.Button>
      </Styles.Item>
    </>
  );
}
