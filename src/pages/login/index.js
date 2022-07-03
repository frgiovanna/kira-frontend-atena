import { Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import LoginForm from "../../components/LoginForm";

export default function Login() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "16px",
      }}
    >
      <Image src="/kira.svg" width={70} height={70} alt="Kira logo" />
      <Typography fontSize="14px" color="text.secondary" marginTop="16px">
        acesse a sua conta
      </Typography>

      <LoginForm />
    </div>
  );
}
