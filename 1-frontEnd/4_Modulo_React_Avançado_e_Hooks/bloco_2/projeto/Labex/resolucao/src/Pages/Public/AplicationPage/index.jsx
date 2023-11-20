// import React from "react"
import PageTitle from "../../../Components/PageTitle/PageTitle";
import { LoginForm } from "../../Private/LoginPage/style";
import { Button, TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import axios from "axios";
import { UserForm } from "../../../Components/Hooks/useForm";
import { UserTripList } from "../../../Components/Hooks/userTripList";



const AplicationPage = () => {
  const trips = UserTripList()
  const [form, onChangeInput] = UserForm({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
    trip: null,
  });

  //  Para se candidatatr a uma viagem
  const onSubmitApplication = (e) => {
    e.preventDefault();

    console.log(form);
    const body = {
      name: form.name,
      age: form.age,
      applicationText: form.applicationText,
      profession: form.profession,
      country: form.country,
    };

    axios.post(
      `https://us-central1-labenu-apis.cloudfunctions.net/labeX/aurelio/trips/${form.trip.id}/apply`,
      body
    );
  };

  return (
    <>
      <PageTitle title={"Aplicar para viagens"} />

      <LoginForm onSubmit={onSubmitApplication}>
        <TextField
          onChange={onChangeInput}
          label={"Nome do candidato"}
          name="name"
          value={form["name"]}
        />
        <TextField
          onChange={onChangeInput}
          label={"idade"}
          type={"number"}
          name="age"
          value={form["age"]}
        />
        <TextField
          onChange={onChangeInput}
          label={"Texto de Aplicacao"}
          name="applicationText"
          value={form["applicationText"]}
          helperText="Explique porque devemos escolher voçê para esta viagem"
        />
        <TextField
          onChange={onChangeInput}
          label={"Profissão"}
          name="profession"
          value={form["profession"]}
        />

        <FormControl fullWidth>
          <InputLabel id="select-paises">País</InputLabel>
          <Select
            labelId="select-paises"
            onChange={onChangeInput}
            name="country"
            value={form["country"]}
          >
            <MenuItem value={"Angola"}>Angola</MenuItem>
            <MenuItem value={"Brasil"}>Brasil</MenuItem>
            <MenuItem value={"EUA"}>Estados Unidos</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="select-viagens">Viagens</InputLabel>
          <Select
            labelId="select-viagens"
            onChange={onChangeInput}
            label={"Profissão"}
            name="trip"
            value={form["trip"]}
          >
            {trips.map((trip) => {
              return <MenuItem value={trip}>{trip.name}</MenuItem>;
            })}
          </Select>
        </FormControl>

        <Button type="submit " variant={"contained"} color="primary">
          Escrever-se a uma viagem
        </Button>
      </LoginForm>
    </>
  );
};

export default AplicationPage;
