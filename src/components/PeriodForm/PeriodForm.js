import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Typography } from "@mui/material";
import { useRouter } from "next/router";
import api from "../../service/api";
import { getItem } from "../../utils/storage";
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
  const [userToken, setUserToken] = React.useState('');

  useEffect(() => {
    const token = getItem('token');
    setUserToken(token);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await api.all([
        api.post("/register/info", {
          last_period: formValues.last_period,
          period_length: formValues.period_length,
          intensity: formValues.intensity,
          cycle_length: formValues.cycle_length,
          birth_control_method: formValues.birth_control_method
        },
          {
            headers: {
              Authorization: `Bearer ${userToken}`
            }
          }),
        api.put("/register/points",
          {
            headers: {
              Authorization: `Bearer ${userToken}`
            }
          })
      ]);

      if (response.status > 204) {
        return;
      }

      console.log(response.data)

      push("/reports");

    } catch (error) {
      console.log(error.message);
    }
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
      <Styles.InputLabel color="text.secondary">
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

      <Styles.InputLabel color="text.secondary">
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

      <Styles.InputLabel color="text.secondary">
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

      <Styles.InputLabel color="text.secondary">
        quantos dias tem seu ciclo?
      </Styles.InputLabel>

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

      <Styles.InputLabel color="text.secondary">
        Utiliza algum método contraceptivo?
      </Styles.InputLabel>

      <FormControl style={{ width: "100%", backgroundColor: "white" }}>
        <Select
          name="birth_control_method"
          value={formValues.name}
          onChange={handleInputChange}
          size="small"
        >
          <MenuItem key="sim" value={true}>
            Sim
          </MenuItem>
          <MenuItem key="nao" value={false}>
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
