import React from "react";
// import styled from "styled-components";
// import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TripInfoItem from './TripInfoItem';
// import { Typography } from "@mui/material";
// import Typography from "@mui/material";



// const Div = styled.div`
//     background-color: blue;
// `

const TripInfoCard = () => {
    return(
        <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 18 }} gutterBottom>
          Informações da viagem
        </Typography>
       <TripInfoItem infoTitle={'Name'} info={'Viagem Para Marte'}/>
       <TripInfoItem infoTitle={'Planeta'} info={'Marte'}/>
       <TripInfoItem infoTitle={'Data'} info={'25/11/2023'}/>
       <TripInfoItem infoTitle={'Descrição'} info={'Uma visita ao nosso vizinho Marte'}/>
       <TripInfoItem infoTitle={'Duração em dias'} info={'365 dias'}/>
      </CardContent>
    
    </Card>

    )
}

export default TripInfoCard