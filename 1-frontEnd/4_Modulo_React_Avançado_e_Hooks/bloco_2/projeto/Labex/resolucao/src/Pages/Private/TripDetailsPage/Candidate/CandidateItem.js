import React from "react";
import { Avatar, IconButton, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText } from "@mui/material";
import ThumbUpAltSharpIcon from '@mui/icons-material/ThumbUpAltSharp';
import ThumbDownAltSharpIcon from '@mui/icons-material/ThumbDownAltSharp';
import axios from "axios";




const CandidateItem = (props) => {

  // const decideCandidate = approve => {

  //   const body = {
  //       approve: approve
  //   }

  //   axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/aurelio/trips/${props.tripId}/candidates/${props.candidates.id}/decide`, body, {
  //     headers :{
  //       auth : localStorage.getItem('token')
  //     } 
  //   })
  // }

  const approveCandidate = () => {
    console.log('Aprovado...')
    props.decideCandidate(true, props.candidateId)
  }

  const rejectCandidate = () => {
    console.log('Rejeitado...')
    props.decideCandidate(false, props.candidateId)
  }

    return(
        <ListItem>
        <ListItemSecondaryAction>
          <IconButton>
            <ThumbUpAltSharpIcon onClick={approveCandidate}/>
          </IconButton>
          <IconButton>
             <ThumbDownAltSharpIcon onClick={rejectCandidate}/>
           </IconButton>

        </ListItemSecondaryAction>
        <ListItemAvatar>
          <Avatar>
    
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={props.candidates.name}
        />
      </ListItem>
    )
}

export default CandidateItem