// import axios from "axios";
// import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { listaDeViagens } from "../../../Components/Urls/Urls";
import { ListTripsContainer } from "./ListTripsStyle";

const ListTripsPage = () => {


    const navigate = useNavigate()

    
        const trips = [
            {
                "id": "LdO2ISxildsFGguN1p1u",
                "date": "31/12/2019",
                "durationInDays": 7,
                "planet": "Mercúrio",
                "name": "Ano novo em Mercúrio",
                "description": "Venha passar a virada pertinho do Sol!"
            },
            {
                "id": "fM93Q5NuUhbrJszkmRy6",
                "date": "05/02/2024",
                "durationInDays": 12,
                "planet": "Marte",
                "name": "A liberdade",
                "description": "Conheça a liberdade de ser liberto!"
            }
        ]
    

        const listTrips = trips.map(trip => {
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

        // console.log(listTrips)

    return(
        <>
            <h2>Listas de viagens</h2>
            {listTrips}
            <button onClick={() => navigate("/")}>Voltar</button>
            <button onClick={() => navigate("/trips/application")} >Inscrever-Se</button>

        </>
    )
}
export default ListTripsPage