import React, { useEffect, useState } from "react";
import MatchListItem from "./MatchListItem";
import { ListContainer } from "./StyleList";
import axios from "axios";



const MatchListPage = () => {
  const [matches, setMatches] = useState([{"name": "CARREGANDO..."}])
   
    useEffect(() => {
      axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aurelio/matches')
      .then(res => {
        setMatches(res.data.matches)
      })
    }, [])
  return (
    <ListContainer>
      {
        matches.map((match) => {
          return <MatchListItem
           profile={match} 
          />
        })
      }
    </ListContainer>
  );
}

export default MatchListPage;
