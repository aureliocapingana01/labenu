// import React from "react";
import { Button, TextField} from "@mui/material";
import { LoginForm } from "./style";
import PageTitle from "../../../Components/PageTitle/PageTitle";

const LoginPage = () => {
    return(
        <>
            <PageTitle title={'Login'}/>
                
            <LoginForm>
                <TextField label={'Email'} type={'email'}/>
                <TextField label={'Senha'} type={'password'} />

                <Button type="submit " variant={'contained'} color="primary">
                    Entrar
                </Button>
            </LoginForm>

        </>
    )
}

export default LoginPage