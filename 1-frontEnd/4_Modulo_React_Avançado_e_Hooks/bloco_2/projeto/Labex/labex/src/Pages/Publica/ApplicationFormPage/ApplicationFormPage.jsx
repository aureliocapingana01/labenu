//  import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ApplicationForm, ApplicationFormContainer, Input, Option, Select } from "./ApplicationFormStyle";
import { Button, DivButton } from "../../Privada/LoginPage/Login";
import { H2 } from "../ListTripsPage/ListTripsStyle";

const ApplicationFormPage = () => {

    // const [selectTrip, setSelectTrip] = useState('')

    const navigate = useNavigate()

    const selected = e => {
        // setSelectTrip(e.target.value)
    }

    return(
        <ApplicationFormContainer>
            <DivButton>
                <Button onClick={() => navigate('/trips/list')} >Voltar</Button>
                <Button>Enviar</Button>
            </DivButton>

            <H2>Inscreva-se para uma viagem</H2>

            
            <ApplicationForm action="">
                <Select onChange={selected()}>
                    <Option value="">Escolha uma viagem</Option>
                </Select>
                <Input type="text" placeholder="Nome" />
                <Input type="number" placeholder="Idade" />
                <Input type="text" placeholder="Texto de candidatura" />
                <Input type="text" placeholder="Profissão" />
                <Select name="" id="">
                    <Option value="">Escolha uma País</Option>
                </Select>
            </ApplicationForm>

        </ApplicationFormContainer>
    )
}
export default ApplicationFormPage