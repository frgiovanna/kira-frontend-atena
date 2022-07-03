import { Typography } from "@mui/material";
import React from "react";
import { useUserContext } from "../../context/UserProvider";
import * as Styles from "./styles";
import api from "../../service/api";

export default function PointsCard() {
  const { token } = useUserContext();

  const [totalPoints, setTotalPoints] = React.useState(0);

  React.useEffect(() => {
    if (token) {
      handleTotalPoints();
    }
  }, []);

  const handleTotalPoints = async () => {
    try {
      const response = await api.get("/points", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status > 204) {
        return;
      }

      setTotalPoints(response.data.total);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Styles.Box>
      <Typography color="text.secondary">Sua pontuação</Typography>
      <Typography variant="h3" color="primary">
        {totalPoints} pontos
      </Typography>
    </Styles.Box>
  );
}
