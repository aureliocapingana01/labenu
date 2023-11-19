import React from "react";
import PageTitle from "../../../Components/PageTitle/PageTitle";
import CandidatesList from "./Candidate/CandidatesList";
import { ContentContainer } from "./style";
import { Link } from "react-router-dom";
// import { Button } from "@mui/material";
import TripInfoCard from "./TripInfo/TripInfoCard";
import { Button } from "@mui/material";



const TripDetailsPage = () => {
  return (
    <div>
      <PageTitle title={"Detalhes da viagem"} />

      <ContentContainer>
        <TripInfoCard />
        <CandidatesList />
      </ContentContainer>

      <Link to={"/"}>
        <Button variant={"contained"} color="primary">
          Tela Inicial
        </Button>
      </Link>
    </div>
  );
};

export default TripDetailsPage;
