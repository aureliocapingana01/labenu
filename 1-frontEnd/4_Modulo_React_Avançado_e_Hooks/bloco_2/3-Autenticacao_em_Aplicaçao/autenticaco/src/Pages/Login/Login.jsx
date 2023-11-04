import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  const controlEmail = e => {
    setEmail(e.target.value);
  };

  const controlSenha = e => {
    setSenha(e.target.value);
  };

  const navigate = useNavigate()

  const onClik = () => {
    // setEmail('')
    // setSenha('')

    const body = {
            email: email, 
            password: senha
        }

    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/aurelio/login"

    axios.post(url, body)
    .then(res => {
        // console.log(res.data.token)
        localStorage.setItem('token', res.data.token)
        navigate("details")
    })
    .catch(err => {
        console.log(err.response.data.message)

    })
  };

  return (
    <>
      <h2>LoginPage</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={controlEmail}
      />
      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={controlSenha}
      />

      <button onClick={onClik}>Enviar</button>
    </>
  );
};
export default LoginPage;
