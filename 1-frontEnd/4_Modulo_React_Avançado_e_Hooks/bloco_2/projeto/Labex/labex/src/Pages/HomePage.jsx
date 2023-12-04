import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, DivButton } from "./Privada/LoginPage/Login";
import styled from "styled-components";
// import ListTripsPage from "./Publica/ListTripsPage/ListTripsPage";
// import LoginPage from "./Privada/LoginPage/LoginPage";

const HomeContainer = styled.div `
    /* display: flex; */
    /* flex-direction: column; */
    /* justify-content: center; */
    /* align-items: center; */
    margin-top: 35% ;
`
const HomePage = () => {
    const navigate = useNavigate()

    return(
        <HomeContainer>
            <DivButton >
                <Button onClick={() => navigate("/trips/list")} >Ver Viagens</Button>
                <Button onClick={() => navigate("/login")} >Área de Admin</Button>
            </DivButton>
        </HomeContainer>
    )
}
export default HomePage