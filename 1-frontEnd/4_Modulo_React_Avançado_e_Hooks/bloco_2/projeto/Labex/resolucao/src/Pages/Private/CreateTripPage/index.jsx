// import React from "react";
// import styled from "styled-components";
import PageTitle from "../../../Components/PageTitle/PageTitle";
import { LoginForm } from "../LoginPage/style";
import { Button, TextField} from "@mui/material";
// import { LoginForm } from "./style";
// import PageTitle from "../../../Components/PageTitle/PageTitle";

// const CreateTripsForm = styled.form `
//    display : grid;
//    gap: 16px;
// `

const CreatePage = () => {
    return(
        <>
            <PageTitle title={'Cria viagens'}/>
                
                <LoginForm>
                    <TextField label={'Nome'}/>
                    <TextField label={'Planeta'}/>
                    <TextField label={'Data'} type=""/>
                    <TextField label={'Descrição'}/>
                    <TextField label={'Duração em dias'} type="number"/>
    
                    <Button type="submit " variant={'contained'} color="primary">
                        Cria Viagem
                    </Button>
                </LoginForm>
        </>
    )
}

export default CreatePage