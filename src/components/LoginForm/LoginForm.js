import React, { useState } from "react";
import { TextField, Typography } from "@mui/material";
import { useRouter } from "next/router";
import * as Styles from "../PeriodForm/styles";

const defaultValues = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const { push } = useRouter();
  const [formValues, setFormValues] = useState(defaultValues);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    //TODO - send to Backend
    console.log(formValues);
    push("/");
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: "100%" }}>
      <Styles.InputLabel>* email</Styles.InputLabel>
      <TextField
        type="email"
        name="email"
        size="small"
        placeholder="insira seu email"
        value={formValues.name}
        onChange={handleInputChange}
        style={{ width: "100%", backgroundColor: "white" }}
      />

      <Styles.InputLabel>* senha</Styles.InputLabel>
      <TextField
        type="password"
        name="password"
        size="small"
        placeholder="insira sua senha"
        value={formValues.name}
        onChange={handleInputChange}
        style={{ width: "100%", backgroundColor: "white" }}
      />

      <Styles.ButtonWrapper>
        <Styles.Button type="submit">Entrar</Styles.Button>
        <Typography fontSize="12px" marginTop="16px" color="text.secondary">
          ainda não possui uma conta?{" "}
          <span style={{ color: "#f62459" }}> registre-se!</span>
        </Typography>
      </Styles.ButtonWrapper>
    </form>
  );
};
export default LoginForm;
