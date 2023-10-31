import React from "react";
import { useNavigate } from "react-router-dom";
import { DivButton, FormLogin, LoginInput } from "./Login";

const LoginPage = () => {

    const navigate = useNavigate()

    return(
        <FormLogin>
            <h2>Login</h2>
            <LoginInput type="email" placeholder="Email"/>
            <LoginInput type="password" placeholder="Senha"/>

            <DivButton >
                <button onClick={() => navigate('/')}>Voltar</button>
                <button>Entrar</button>
            </DivButton>
        </FormLogin>
    )
}
export default LoginPage