import React, { useEffect, useState } from "react";
import PageTitle from "../../../Components/PageTitle/PageTitle";
import CandidatesList from "./Candidate/CandidatesList";
import { ContentContainer } from "./style";
import { Link, useNavigate, useParams } from "react-router-dom";
import TripInfoCard from "./TripInfo/TripInfoCard";
import { Button } from "@mui/material";
import axios from "axios";
import { UserProtectdPage } from "../../../Components/Hooks/useProtectedPage";



const TripDetailsPage = () => {

  const [trip, setTrip] = useState()

  //  olha para url da rota e tenta pegar os paramentros
  const params = useParams()

 UserProtectdPage()

  const getTripDetail = () => {
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/aurelio/trip/${params.tripId}`, {
      headers : {
        auth : localStorage.getItem('token')
      }
    })
    .then(res => {
      setTrip(res.data.trip)
    })
  }
  useEffect(() => {
    getTripDetail()
  }, [])

  
  const decideCandidate = (approve, candidateId) => {
    const body = {
        approve: approve
    }

    axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/aurelio/trips/${params.tripId}/candidates/${candidateId}/decide`, body, {
      headers :{
        auth : localStorage.getItem('token')
      } 
    })
    .then(() => {
      getTripDetail()
    })
  }


  return (
    <div>
      <PageTitle title={"Detalhes da viagem"} />

      { 
        trip ? <ContentContainer>
        <TripInfoCard info={trip} />
        <CandidatesList 
        candidates={trip.candidates}  
        decideCandidate={decideCandidate}/>
      </ContentContainer> 
        : <div> Carregando... </div>
      }

      <Link to={"/"}>
        <Button variant={"contained"} color="primary">
          Tela Inicial
        </Button>
      </Link>
      <Link to={"/viagens"}>
        <Button variant={"contained"} color="primary">
          Voltar
        </Button>
      </Link>
    </div>
  );
};

export default TripDetailsPage;
