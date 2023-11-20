// import React from "react";
import { Button, TextField} from "@mui/material";
import { LoginForm } from "./style";
import PageTitle from "../../../Components/PageTitle/PageTitle";
import { UserForm } from "../../../Components/Hooks/useForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {

    const [form, onChangeInput] = UserForm({
        email: '',
        password: ''
    })

    const navigate = useNavigate()

    const onSubmitLogin = e => {
        e.preventDefault()
        console.log(form)

        const body = {
            email : form.email,
            password : form.password
        }

        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/aurelio/login', body)
        .then(res => {
      localStorage.setItem('token', res.data.token)
      navigate('/viagens')
        })
        .catch(err => {
            console.log(err)
        })
    }


    return(
        <>
            <PageTitle title={'Login'}/>
                
            <LoginForm onSubmit={onSubmitLogin}>
                <TextField 
                    label={'Email'} type={'email'}
                    onChange={onChangeInput}
                    value={form['email']}
                    name="email"
                />
                <TextField 
                    label={'Senha'} type={'password'}
                    onChange={onChangeInput}
                    value={form['password']} 
                    name="password"
                />

                <Button type="submit " variant={'contained'} color="primary">
                    Entrar
                </Button>
            </LoginForm>

        </>
    )
}

export default LoginPage