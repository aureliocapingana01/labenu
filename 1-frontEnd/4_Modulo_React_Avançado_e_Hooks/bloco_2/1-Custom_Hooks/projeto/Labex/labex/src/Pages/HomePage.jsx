import React from "react";
import ListTripsPage from "./Publica/ListTripsPage/ListTripsPage";
import LoginPage from "./Privada/LoginPage/LoginPage";

const HomePage = () => {
    return(
        <>
        <h1>Labex</h1>
            <ListTripsPage />
            <LoginPage />
        </>
    )
}
export default HomePage