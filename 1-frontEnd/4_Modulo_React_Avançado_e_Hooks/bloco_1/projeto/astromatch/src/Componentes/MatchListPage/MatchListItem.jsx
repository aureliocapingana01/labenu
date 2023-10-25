import React from "react";
import { Avatar, ListItemContainer } from "./StyleListItem";

const MatchListItem = (props) => {

  const profile = props.profile
  
  return (
    <ListItemContainer>
      <Avatar src={profile.photo}/>
      <p> {profile.name} </p>
    </ListItemContainer>
  );
}

export default MatchListItem;
