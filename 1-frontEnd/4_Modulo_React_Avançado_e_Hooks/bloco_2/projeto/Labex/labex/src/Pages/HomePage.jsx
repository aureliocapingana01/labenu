import React from "react";
import { useNavigate } from "react-router-dom";
// import ListTripsPage from "./Publica/ListTripsPage/ListTripsPage";
// import LoginPage from "./Privada/LoginPage/LoginPage";

const HomePage = () => {
    const navigate = useNavigate()

    return(
        <>
           <button onClick={() => navigate("/trips/list")} >Ver Viagens</button>
           <button onClick={() => navigate("/login")} >Área de Admin</button>
        </>
    )
}
export default HomePage