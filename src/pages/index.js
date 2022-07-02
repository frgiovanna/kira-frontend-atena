import React from "react";
import styled from "styled-components";
import BottomMenu from "../components/BottomMenu";
import Card from "../components/Card";
import LinkList from "../components/LinkList";
import ProfileHeader from "../components/ProfileHeader";
import RegisterDialog from "../components/RegisterDialog";
import RegisterText from "../components/RegisterText";

export const Container = styled.div`
  width: 400px;
  height: 100vh;
  background-color: #ecf1f4;
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
      <div style={{ padding: 16 }}>
        <ProfileHeader />
        <RegisterText />
        <Card />
        <LinkList />
        {!isLogged && (
          <RegisterDialog open={openDialog} onClose={handleClose} />
        )}
      </div>
      <BottomMenu />
    </Container>
  );
}
