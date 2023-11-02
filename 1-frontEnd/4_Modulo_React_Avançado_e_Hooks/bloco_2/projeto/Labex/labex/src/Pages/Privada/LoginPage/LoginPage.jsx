import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, DivButton, FormLogin, LoginInput } from "./Login";

const LoginPage = () => {

    const navigate = useNavigate()

    return(
        <FormLogin>
            <h2>Login</h2>
            <LoginInput type="email" placeholder="Email"/>
            <LoginInput type="password" placeholder="Senha"/>

            <DivButton >
                <Button onClick={() => navigate('/')}>Voltar</Button>
                <Button>Entrar</Button>
            </DivButton>
        </FormLogin>
    )
}
export default LoginPage