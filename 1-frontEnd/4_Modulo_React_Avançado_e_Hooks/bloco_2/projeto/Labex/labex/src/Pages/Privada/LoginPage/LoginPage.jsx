import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, DivButton, FormLogin, LoginInput } from "./Login";
import { Input } from "../../Publica/ApplicationFormPage/ApplicationFormStyle";
import { H2 } from "../../Publica/ListTripsPage/ListTripsStyle";

const LoginPage = () => {

    const navigate = useNavigate()

    return(
        <FormLogin>
            <H2>Login</H2>
            <Input type="email" placeholder="Email"/>
            <Input type="password" placeholder="Senha"/>

            <DivButton >
                <Button onClick={() => navigate('/')}>Voltar</Button>
                <Button>Entrar</Button>
            </DivButton>
        </FormLogin>
    )
}
export default LoginPage