import React from "react";
import { useNavigate } from "react-router-dom";
import { DivButton } from "./Privada/LoginPage/Login";
// import ListTripsPage from "./Publica/ListTripsPage/ListTripsPage";
// import LoginPage from "./Privada/LoginPage/LoginPage";

const HomePage = () => {
    const navigate = useNavigate()

    return(
        <>
            <DivButton >
                <button onClick={() => navigate("/trips/list")} >Ver Viagens</button>
                <button onClick={() => navigate("/login")} >Área de Admin</button>
            </DivButton>
        </>
    )
}
export default HomePage