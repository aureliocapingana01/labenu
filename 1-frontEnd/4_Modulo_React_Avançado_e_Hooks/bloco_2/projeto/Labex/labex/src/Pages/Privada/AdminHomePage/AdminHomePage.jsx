import React, { useEffect } from "react";
import { Button, DivButton } from "../LoginPage/Login";
import { useNavigate } from "react-router-dom";
import { UseProtetedPage } from "../../../Components/Hooks/UseProtetedLogin";
import { AdminInfo } from "./AdminInfo";
import { H2 } from "../../Publica/ListTripsPage/ListTripsStyle";
import { TripDetails } from "../TripDetailsPage/TripDetails";
import TripDetailsPage from "../TripDetailsPage/TripDetailsPage";
// import { CardTripsNames } from "./StyleAdmin";
// import { UseRequestData } from "../../../Components/Hooks/UseRequetData";
// import { urlGetTrips } from "../../../Components/Urls/Urls";



const AdminHomePage = () => {

    UseProtetedPage()

    // useEffect(() => {

    // })
    
    const navigate = useNavigate()


    return(
        <>

        {/* <H2>AdminHomePage</H2> */}

            <DivButton >
                <Button onClick={() => navigate('/')}>Tela Inicial</Button>
                <Button>Criar uma Viagem</Button>
            </DivButton>

            <TripDetailsPage />

        </>
    )
}
export default AdminHomePage