import React, { useState } from "react";
import {
  Typography,
  TextField,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import { useRouter } from "next/router";
import * as Styles from "./styles";

const defaultValues = {
  last_period: "",
  period_length: 0,
  intensity: "",
  cycle_length: 0,
  birth_control_method: "",
};

const PeriodForm = () => {
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
    push("/reports");
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "16px" }}>
      <Typography color="primary" textAlign="center" fontSize={16}>
        Insira as informações sobre o seu ciclo para atualizar o seu Calendário
        menstrual
      </Typography>
      <Styles.InputLabel>
        quando começou sua última menstruação?
      </Styles.InputLabel>
      <TextField
        type="date"
        name="last_period"
        size="small"
        value={formValues.name}
        onChange={handleInputChange}
        style={{ width: "100%", backgroundColor: "white" }}
      />

      <Styles.InputLabel>
        por quantos dias você costuma ficar menstruada?
      </Styles.InputLabel>
      <TextField
        type="number"
        name="period_length"
        size="small"
        value={formValues.name}
        onChange={handleInputChange}
        style={{ width: "100%", backgroundColor: "white" }}
      />

      <Styles.InputLabel>
        como você diria que é a intensidade do seu fluxo?
      </Styles.InputLabel>
      <FormControl style={{ width: "100%", backgroundColor: "white" }}>
        <Select
          name="intensity"
          value={formValues.name}
          onChange={handleInputChange}
          size="small"
        >
          <MenuItem key="leve" value="Leve">
            Leve
          </MenuItem>
          <MenuItem key="moderado" value="moderado">
            Moderado
          </MenuItem>
          <MenuItem key="intenso" value="intenso">
            Intenso
          </MenuItem>
        </Select>
      </FormControl>

      <Styles.InputLabel>quantos dias tem seu ciclo?</Styles.InputLabel>

      <TextField
        type="number"
        name="cycle_length"
        size="small"
        value={formValues.name}
        onChange={handleInputChange}
        style={{ width: "100%", backgroundColor: "white" }}
      />
      <Typography fontSize={12} color="text.secondary">
        a duração do ciclo é o número de dias entre o primeiro dia da sua
        menstruação e o dia anterior ao início da sua próxima menstruação.
        geralmente, o ciclo menstrual é de 28 dias. considera-se normal que dure
        entre 21 e 35 dias.
      </Typography>

      <Styles.InputLabel>Utiliza algum método contraceptivo?</Styles.InputLabel>

      <FormControl style={{ width: "100%", backgroundColor: "white" }}>
        <Select
          name="birth_control_method"
          value={formValues.name}
          onChange={handleInputChange}
          size="small"
        >
          <MenuItem key="sim" value="sim">
            Sim
          </MenuItem>
          <MenuItem key="nao" value="nao">
            Não
          </MenuItem>
        </Select>
      </FormControl>
      <Styles.ButtonWrapper>
        <Styles.Button type="submit">Confirmar</Styles.Button>
      </Styles.ButtonWrapper>
    </form>
  );
};
export default PeriodForm;
