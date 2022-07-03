import React from "react";
import styled from "@emotion/styled";
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
import { getItem } from "../utils/storage";
import api from '../service/api';

export const Container = styled.div`
  width: 400px;
  background-color: #ecf1f4;
  margin: auto;
  margin-bottom: 50px;
`;

// const token = localStorage.getItem('token');

export default function Home() {
  const isServer = typeof window === 'undefined';

  const [userToken, setUserToken] = React.useState('');
  const [openDialog, setOpenDialog] = React.useState(true);
  const isLogged = userToken ? true : false;

  const [totalPoints, setTotalPoints] = React.useState('');

  React.useEffect(() => {
    const token = getItem('token');
    console.log('pegou o token');

    setUserToken(token);
    console.log(token);

    handleTotalPoints();

  }, []);

  const handleClose = () => {
    setOpenDialog(false);
  };

  const handleTotalPoints = async () => {
    console.log('entrou na função');

    try {
      const response = await api.get("/points",
        {
          headers: {
            Authorization: `Bearer ${!isServer ? userToken : null}`
          }
        });

      if (response.status > 204) {
        return;
      }

      setTotalPoints(response.data.total);

    } catch (error) {
      console.log(error.message);
    }
  };

  if (!isLogged) {
    return (
      <Container>
        <div style={{ padding: 16 }}>
          <ProfileHeader />
          <TextBox
            icon={<WarningRoundedIcon color="primary" />}
            message="complete seu cadastro para aproveitar tudo o que o app oferece!"
            link="/login"
          />
          <Card
            icon={<CalendarMonthIcon />}
            title="calendário menstrual"
            description="insira os dados do seu ciclo menstrual
          para acompanhar todos os detalhes!"
            link="/login"
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
          link="/periodcalendar"
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
            firstContent: `${totalPoints} pontos`,
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

// export const getStaticProps = async () => {
//   const res = await api.get("/points",
//     {
//       headers: {
//         Authorization: `Bearer ${token}`
//       }
//     });
//   console.log(res.data);
//   return {
//     props: { data: res.data.slice(0, 10) },
//   };
// };