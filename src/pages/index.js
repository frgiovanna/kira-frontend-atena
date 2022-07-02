import React from "react";
import styled from "styled-components";
import Card from "../components/Card";
import LinkList from "../components/LinkList";
import ProfileHeader from "../components/ProfileHeader";
import RegisterDialog from "../components/RegisterDialog";

export const Container = styled.div`
  background-color: #ecf1f4;
  width: 400px;
  height: 800px;
  padding: 16px;
  margin: auto;
`;

export default function Home() {
  const [openDialog, setOpenDialog] = React.useState(true);
  const isLogged = false;

  const handleClose = () => {
    setOpenDialog(false);
  };

  return (
    <Container>
      <ProfileHeader />
      <Card />
      <LinkList />
      {!isLogged && <RegisterDialog open={openDialog} onClose={handleClose} />}
    </Container>
  );
}
