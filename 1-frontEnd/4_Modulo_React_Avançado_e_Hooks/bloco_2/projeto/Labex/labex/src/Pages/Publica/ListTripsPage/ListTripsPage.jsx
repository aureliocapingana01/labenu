import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { listaDeViagens, urlGetTrips } from "../../../Components/Urls/Urls";
import { H2, ListTripsContainer } from "./ListTripsStyle";
import { Button, DivButton } from "../../Privada/LoginPage/Login";



const ListTripsPage = () => {

    const [listTrip, setListTrip] = useState([])

    const navigate = useNavigate()

    const getTrips = () => {
        axios.get(urlGetTrips)
        .then(res => {
            setListTrip(res.data.trips)
        })
        .catch(err => {
            console.log(err)
        })
    }

    getTrips()
    

        const listTrips = listTrip.map(trip => {
            return(
                <ListTripsContainer>
                    <p>Nome : {trip.name} </p>
                    <p>Planeta : {trip.planet} </p>
                    <p>Descrição : {trip.description} </p>
                    <span>Duração :  {trip.durationInDays} </span>
                    <span>Data : {trip.date} </span>
                </ListTripsContainer>
            )
        })


    return(
        <>
            <DivButton >
                <Button onClick={() => navigate("/")}>Voltar</Button>
                <Button onClick={() => navigate("/trips/application")} >Inscrever-Se</Button>
            </DivButton>

            <H2>Lista de viagens</H2>


            {listTrips}
        </>
    )
}
export default ListTripsPage