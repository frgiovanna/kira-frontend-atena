import * as React from "react";
import Image from "next/image";
import { Button, Typography } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import * as Styles from "./styles";

export default function Calendar() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography fontSize={16} color="text.secondary" marginY="24px">
        Alta probabilidade de engravidar
      </Typography>

      <div style={{ boxShadow: "4px 4px 8px rgb(0 0 0 / 25%)" }}>
        <Image src="/calendar.png" alt="calendario" width={300} height={420} />
      </div>
      <Button
        color="primary"
        size="small"
        style={{ fontSize: "10px", marginTop: '16px' }}
        startIcon={<CalendarMonthIcon />}
      >
        editar calendário
      </Button>
      <Styles.Button>Como você se sente hoje?</Styles.Button>
    </div>
  );
}
