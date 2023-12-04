//  import React, { useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import { ApplicationForm, ApplicationFormContainer, FormContainer, Input, Option, Select } from "./ApplicationFormStyle";
import { Button, DivButton } from "../../Privada/LoginPage/Login";
import { H2 } from "../ListTripsPage/ListTripsStyle";
import { UseForm } from "../../../Components/Hooks/UseForm";



const ApplicationFormPage = () => {

    const {form, controlInputs} = UseForm({
            name: "",
            age: "",
            applicationText: "",
            profession: "",
            country: ""
    })

    // cleanInputs
   

    const navigate = useNavigate()

    // const selected = e => {
    // }

    const formApplyToTrip = (e) => {
        e.preventDefault()
        console.log(form)
    }

    return(
        <FormContainer>

            <H2>Inscreva-se para uma viagem</H2>

            <form onSubmit={formApplyToTrip}>
                <Select name="" id="">
                    <Option value="">Escolha uma viagem</Option>
                </Select>
                <Input 
                    type="text" 
                    name="name"
                    placeholder="Nome"
                    onChange={controlInputs}
                    value={form.name}
                    minLength={5}
                    required
                />
                <Input 
                    type="number" 
                    name="age"
                    placeholder="Idade"
                    onChange={controlInputs}
                    value={form.age}
                    min={18}
                    required
                />
                <Input 
                    type="text" 
                    name="applicationText"
                    placeholder="Texto de candidatura"
                    onChange={controlInputs}
                    value={form.applicationText}
                    minLength={25}
                    required
                />
                <Input 
                    type="text" 
                    name="profession"
                    placeholder="Profissão"
                    onChange={controlInputs}
                    value={form.profession}
                    minLength={5}
                    required
                />
                <Select name="country" id="">
                    <Option value={form.country}>Escolha um País</Option>
                    <Option value="">Angola</Option>
                    <Option value="">Brasil</Option>
                    <Option value="">Cabo-Verde</Option>
                    <Option value="">Portugal</Option>
                </Select>

                <DivButton>
                    <Button onClick={() => navigate('/trips/list')} >Voltar</Button>
                    <Button>Enviar</Button>
                </DivButton>

            </form>

        </FormContainer>
    )
}

export default ApplicationFormPage