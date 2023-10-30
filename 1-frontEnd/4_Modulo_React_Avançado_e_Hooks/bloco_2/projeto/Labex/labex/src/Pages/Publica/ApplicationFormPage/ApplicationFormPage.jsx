 import React from "react";
import { useNavigate } from "react-router-dom";
import { ApplicationForm, Input, Option, Select } from "./ApplicationFormStyle";

const ApplicationFormPage = () => {

    const navigate = useNavigate()

    return(
        <>
            <h2>Inscreva-se para uma viagem</h2>

            <ApplicationForm action="">
                <Select name="" id="">
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

            <button onClick={() => navigate('/trips/list')} >Voltar</button>
            <button>Enviar</button>
        </>
    )
}
export default ApplicationFormPage