// import { Typography } from "@mui/material";
import React from "react";
import Typography from '@mui/material/Typography';


const TripInfoItem = props => {
  return (
    <Typography variant="body1">
        <strong>{props.infoTitle}</strong> : {props.info}
    </Typography>
  );
};

export default TripInfoItem;
