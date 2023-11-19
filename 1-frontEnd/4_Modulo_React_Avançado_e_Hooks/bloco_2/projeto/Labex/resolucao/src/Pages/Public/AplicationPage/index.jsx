// import React from "react"
import PageTitle from "../../../Components/PageTitle/PageTitle";
import { LoginForm } from "../../Private/LoginPage/style";
import { Button, TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";

const AplicationPage = () => {
  return (
    <>
      <PageTitle title={"Cria viagens"} />

      <LoginForm>
        <TextField label={"Nome do candidato"} />
        <TextField label={"idade"} type={"number"} />
        <TextField
          label={"Texto de Aplicacao"}
          helperText="Explique porque devemos escolher voçê para esta viagem"
        />
        <TextField label={"Profissão"} />

        <FormControl fullWidth>
          <InputLabel id="select-paises">País</InputLabel>
          <Select labelId="select-paises">
            <MenuItem value={"Angola"}>Angola</MenuItem>
            <MenuItem value={"Brasil"}>Brasil</MenuItem>
            <MenuItem value={"EUA"}>Estados Unidos</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="select-viagens">Viagens</InputLabel>
          <Select
            labelId="select-viagens"
            //   id="demo-simple-select"
            //   value={age}
            //   label="Age"
            //   onChange={handleChange}
          >
            <MenuItem value={"1"}>Marte</MenuItem>
            <MenuItem value={"2"}>Jupter</MenuItem>
            <MenuItem value={"3"}>Plutão</MenuItem>
          </Select>
        </FormControl>

        {/* <TextField label={"Duração em dias"} type="number" /> */}

        <Button type="submit " variant={"contained"} color="primary">
          Cria Viagem
        </Button>
      </LoginForm>
    </>
  );
};

export default AplicationPage;
