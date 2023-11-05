import React from "react";
import { useForm } from "./Hooks/UseForm";

const App = () => {

  const {form, controlInputs, cleanFields} = useForm({email:'', password:''})

  // const [pais, setPais] = useState("");

  // const [form, setForm] = useState({
  //   email :'',
  //   password :'' 
  // })

  // const controlInputs = e => {
  //   setForm({...form, [e.target.name] : e.target.value});
  // };

  // const inputPais = e => {
  //   setPais(e.target.value);
  // };

  const reqForm = e => {
    e.preventDefault();

    // const body = {
    //   email: email,
    //   password: senha,
    //   pais: pais
    // };

    console.log(form);
    cleanFields()
  };
  

  return (
    <div>
      <h1>Form</h1>

      <form onSubmit={reqForm}>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={form.email}
          onChange={controlInputs}
          minLength={8}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          name="password"
          value={form.password}
          onChange={controlInputs}
          minLength={8}
          pattern="^.{8,}"
          title="A senha deve ter no minimo 3 letras"
          required
        />
        {/* <input
          type="text"
          placeholder="país"
          value={pais}
          onChange={inputPais}
          pattern="[A-Z]{3}"
          title="Código do País com Tres Letras Maiusculas "
          required
        /> */}

        <button>Entrar</button>
      </form>
    </div>
  );
};

export default App;
