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

const TripInfoCard = (props) => {

  const {
    name,
    planet,
    description,
    date,
    durationInDays,

  } = props.info


    return(
        <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 18 }} gutterBottom>
          Informações da viagem
        </Typography>
       <TripInfoItem infoTitle={'Name'} info={name}/>
       <TripInfoItem infoTitle={'Planeta'} info={planet}/>
       <TripInfoItem infoTitle={'Data'} info={date}/>
       <TripInfoItem infoTitle={'Descrição'} info={description}/>
       <TripInfoItem infoTitle={'Duração em dias'} info={durationInDays}/>
      </CardContent>
    
    </Card>

    )
}

export default TripInfoCard