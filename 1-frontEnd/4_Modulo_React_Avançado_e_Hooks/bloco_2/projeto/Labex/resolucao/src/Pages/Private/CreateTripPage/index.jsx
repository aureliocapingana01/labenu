// import React from "react";
// import styled from "styled-components";
import { useFormAction, useNavigate } from "react-router-dom";
import PageTitle from "../../../Components/PageTitle/PageTitle";
import { LoginForm } from "../LoginPage/style";
import { Button, TextField} from "@mui/material";
import { UserForm } from "../../../Components/Hooks/useForm";
import axios from "axios";
import { UserProtectdPage } from "../../../Components/Hooks/useProtectedPage";
// import { LoginForm } from "./style";
// import PageTitle from "../../../Components/PageTitle/PageTitle";

// const CreateTripsForm = styled.form `
//    display : grid;
//    gap: 16px;
// `

const CreatePage = () => {

    UserProtectdPage()

    const [form, onChangeInput] =  UserForm({
        name: '',
        planet: '',
        date: '',
        description: '',
        duration: '',
    })

    const navigate = useNavigate()

    const onSubmitForm = e => {
        e.preventDefault()
        // console.log(form)

        const body = {
            name: form.name ,
            planet: form.planet ,
            date: form.date ,
            description: form.description ,
            durationInDays: form.duration
        }

        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/aurelio/trips', body, {
            headers : {
                auth : localStorage.getItem('token')
            }
        })
        .then(res => {
            navigate('/viagens')
        })
        // .catch(err => {
        //     console.log(err)
        // })
    }

    return(
        <>
            <PageTitle title={'Cria viagens'}/>
                
                <LoginForm onSubmit={onSubmitForm}>
                    <TextField label={'Nome'}
                        onChange={onChangeInput}
                        name={'name'}
                        value={form['name']}
                    />

                    <TextField label={'Planeta'}
                        onChange={onChangeInput}
                        name={'planet'}
                        value={form['planet']}
                    />

                    <TextField label={'Data'} type=""
                        onChange={onChangeInput}
                        name={'date'}
                        value={form['date']}
                    />

                    <TextField label={'Descrição'}
                        onChange={onChangeInput}
                        name={'description'}
                        value={form['description']}
                    />

                    <TextField label={'Duração em dias'} type="number"
                        onChange={onChangeInput}
                        name={'duration'}
                        value={form['duration']}
                    />
    
                    <Button type="submit " variant={'contained'} color="primary">
                        Cria Viagem
                    </Button>
                </LoginForm>
        </>
    )
}

export default CreatePage