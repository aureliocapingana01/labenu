import React from "react";
import { Button, DivButton } from "../LoginPage/Login";
import { useNavigate } from "react-router-dom";
import { UseProtetedPage } from "../../../Components/Hooks/UseProtetedLogin";

const AdminHomePage = () => {

    UseProtetedPage()

    const navigate = useNavigate()

    
    return(
        <>
        {/*  Para o administrador ver a lista de viagens e poder deletá-las ou acessar o detalhe de cada uma delas */}
        <h2>AdminHomePage</h2>

            <DivButton >
                <Button onClick={() => navigate('/')}>Tela Inicial</Button>
                <Button>Criar uma Viagem</Button>
            </DivButton>
        </>
    )
}
export default AdminHomePage