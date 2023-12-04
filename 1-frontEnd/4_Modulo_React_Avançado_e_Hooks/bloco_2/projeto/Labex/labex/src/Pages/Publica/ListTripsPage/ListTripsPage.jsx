// import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
import { urlGetTrips } from "../../../Components/Urls/Urls";
import {H2, ListTripsContainer, ListTripsContainerDiv, ParagrafoRequestInfo,} from "./ListTripsStyle";
import { Button, DivButton } from "../../Privada/LoginPage/Login";
import { UseRequestData } from "../../../Components/Hooks/UseRequetData";
// import AdminHomePage from "../../Privada/AdminHomePage/AdminHomePage";
// import { CardTripsNames } from "../../Privada/AdminHomePage/StyleAdmin";




const ListTripsPage = () => {
  const [data, loading, error] = UseRequestData(urlGetTrips);

  const navigate = useNavigate();

  const listTrips = data && data.map((trip, id) => {
    return (
      <ListTripsContainer key={id}>
        <ListTripsContainerDiv>
          <h3>Nome : </h3>
          <p>{trip.name} </p>
        </ListTripsContainerDiv>
        <ListTripsContainerDiv>
          <h3>Planeta :</h3>
          <p> {trip.planet}</p>
        </ListTripsContainerDiv>
        <ListTripsContainerDiv>
          <h3>Descrição :</h3>
          <p>{trip.description}</p>
        </ListTripsContainerDiv>
        <ListTripsContainerDiv>
          <h3> Duração : </h3> <p>{trip.durationInDays}</p>
        </ListTripsContainerDiv>
        <ListTripsContainerDiv>
          <h3> Data : </h3> <p>{trip.date}</p>
        </ListTripsContainerDiv>

      </ListTripsContainer>
    );
  });

  return (
    <>
      <DivButton>
        <Button onClick={() => navigate("/")}>Voltar</Button>
        <Button onClick={() => navigate("/trips/application")}>
          Inscrever-Se
        </Button>
      </DivButton>

      <H2>Lista de viagens</H2>

      {
        loading && <ParagrafoRequestInfo>Carregando...</ParagrafoRequestInfo>
      }
      {
        !loading && error && <ParagrafoRequestInfo>Erro na requisicao...</ParagrafoRequestInfo>
      }
      {
        !loading && data && data.length > 0 && listTrips
      }
      {
        !loading && data && data.length === 0 && <ParagrafoRequestInfo>Não existe nenhum dados </ParagrafoRequestInfo>
      }

    </>
  );
};

export default ListTripsPage;