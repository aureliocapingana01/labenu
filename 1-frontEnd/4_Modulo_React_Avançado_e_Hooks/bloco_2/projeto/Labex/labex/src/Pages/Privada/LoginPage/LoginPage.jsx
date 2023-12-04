import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, DivButton, FormContainer, Input} from "./Login";
import { H2 } from "../../Publica/ListTripsPage/ListTripsStyle";
import { UseForm } from "../../../Components/Hooks/UseForm";
import axios from "axios";
import { urlLogin } from "../../../Components/Urls/Urls";


const LoginPage = () => {

    const {form, controlInputs, cleanInputs} = UseForm({email:'', password:''})

    const navigate = useNavigate()

    const login = e => {
        e.preventDefault()
        
        axios.post(urlLogin, form)
        .then(res => {
            localStorage.setItem('token', res.data.token)
            navigate('/admin/trips/list')
            cleanInputs()
        })
        .catch(err => {
            alert(err.response.data.message)
            navigate('/')
        })
    }

    return(
            <FormContainer>

                <H2>Login</H2>

                <form onSubmit={login}>
                    <Input 
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={controlInputs}
                        required
                    />

                    <Input 
                        type="password"
                        name="password"
                        placeholder="Senha"
                        value={form.password}
                        onChange={controlInputs}
                        required
                    />
                    <DivButton >
                        <Button onClick={() => navigate('/')}>Voltar</Button>
                        <Button>Fazer Login</Button>
                    </DivButton>
                </form>
            </FormContainer>
        )
    }

    export default LoginPage
  