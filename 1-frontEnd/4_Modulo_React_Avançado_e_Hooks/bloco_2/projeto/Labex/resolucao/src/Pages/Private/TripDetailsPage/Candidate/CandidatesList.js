import React from "react";
import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';

import CandidateItem from "./CandidateItem";
import { CardContent } from "@mui/material";
// import Typography from "@mui/material/Typography";



const CandidatesList = () => {
  return (
    <div>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 18 }} gutterBottom>
            Lista de Candidatos
          </Typography>
      

          <List>
            <CandidateItem />
            <CandidateItem />
            <CandidateItem />
          </List>
        </CardContent>
      </Card>
    </div>
  );
};

export default CandidatesList;
