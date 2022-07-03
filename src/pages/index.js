import React from "react";
import styled from "styled-components";
import BottomMenu from "../components/BottomMenu";
import Card from "../components/Card";
import LinkList from "../components/LinkList";
import ProfileHeader from "../components/ProfileHeader";
import RegisterDialog from "../components/RegisterDialog";
import TextBox from "../components/TextBox";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import WarningRoundedIcon from "@mui/icons-material/WarningRounded";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import WorkspacePremiumRoundedIcon from "@mui/icons-material/WorkspacePremiumRounded";

export const Container = styled.div`
  width: 400px;
  background-color: #ecf1f4;
  margin: auto;
  margin-bottom: 50px;
`;

export default function Home() {
  const [openDialog, setOpenDialog] = React.useState(true);
  const isLogged = true;

  const handleClose = () => {
    setOpenDialog(false);
  };

  if (!isLogged) {
    return (
      <Container>
        <div style={{ padding: 16 }}>
          <ProfileHeader />
          <TextBox
            icon={<WarningRoundedIcon color="primary" />}
            message="complete seu cadastro para aproveitar tudo o que o app oferece!"
            link="/calendarinfo"
          />
          <Card
            icon={<CalendarMonthIcon />}
            title="calendário menstrual"
            description="insira os dados do seu ciclo menstrual
          para acompanhar todos os detalhes!"
            button="/calendarinfo"
            label="criar meu calendário"
          />
          <LinkList />
          <RegisterDialog open={openDialog} onClose={handleClose} />
        </div>
        <BottomMenu />
      </Container>
    );
  }

  return (
    <Container>
      <div style={{ padding: 16 }}>
        <ProfileHeader />
        <TextBox
          icon={<LibraryBooksIcon color="primary" />}
          message=" personalize o app para que possamos trazer conteúdos especialmente para você"
        />
        <Card
          icon={<CalendarMonthIcon />}
          title="calendário menstrual"
          description="insira os dados do seu ciclo menstrual
      para acompanhar todos os detalhes!"
          link="/calendarinfo"
          label="criar meu calendário"
          footer={{
            firstTitle: "Probabilidade de engravidar",
            firstContent: "alta",
            secondTitle: "Sua próxima menstruação será em",
            secondContent: "18 dias",
          }}
        />
        <Card
          secondary
          icon={<WorkspacePremiumRoundedIcon />}
          title="Clube Kira"
          description="interaja com a Kira e ganhe mais pontos."
          link="/points"
          label="saiba mais"
          footer={{
            firstTitle: "Sua pontuação atual",
            firstContent: "200 pontos",
            secondTitle: "Você tem pontos que expiram em",
            secondContent: "19 dias",
          }}
        />
        <LinkList />
      </div>
      <BottomMenu />
    </Container>
  );
}
