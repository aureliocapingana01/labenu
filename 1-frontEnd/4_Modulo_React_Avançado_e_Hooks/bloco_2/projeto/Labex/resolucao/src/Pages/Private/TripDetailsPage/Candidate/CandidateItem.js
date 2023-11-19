import React from "react";
import { Avatar, IconButton, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText } from "@mui/material";
import ThumbUpAltSharpIcon from '@mui/icons-material/ThumbUpAltSharp';
import ThumbDownAltSharpIcon from '@mui/icons-material/ThumbDownAltSharp';
// import { ListItem, ListItemSecondaryAction } from "@mui/material";



const CandidateItem = () => {
    return(
        <ListItem>
        <ListItemSecondaryAction>
          <IconButton>
            <ThumbUpAltSharpIcon />
          </IconButton>
          <IconButton>
             <ThumbDownAltSharpIcon />
           </IconButton>

        </ListItemSecondaryAction>
        <ListItemAvatar>
          <Avatar>
    
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Candidato 1"
        />
      </ListItem>
    )
}

export default CandidateItem