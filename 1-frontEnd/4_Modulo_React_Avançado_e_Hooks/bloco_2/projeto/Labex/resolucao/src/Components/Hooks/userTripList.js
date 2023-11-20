import axios from "axios";
import { useEffect, useState } from "react";

export const UserTripList = () => {
    const [trips, setTrips] = useState([]);
  
    useEffect(() => {
      // Para pegar todas a viagens
      axios
        .get(
          "https://us-central1-labenu-apis.cloudfunctions.net/labeX/aurelio/trips"
        )
        .then((res) => {
          setTrips(res.data.trips);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
    
    return trips
}