import React from "react";
import styled from "styled-components";
import { theme } from "../../../Theme";
import { UseRequestData } from "../../../Components/Hooks/UseRequetData";
import { urlGetTrips } from "../../../Components/Urls/Urls";
import axios from "axios";

const TripDiv = styled.div `
/* margin-top: 30px; */
    margin-bottom: 7px;
    /* display: flex; */
    /* flex-direction: column; */
    /* width: 100%; */
    /* justify-content:flex-start; */
    align-items: flex-start;
    border-bottom: 1px solid rgba(0,0,0,0.3);
    /* background-color: transparent; */

    :hover{
        color: ${theme.colors.cor2};
        background-color: ${theme.colors.cor1};
        /* width: 100%; */
       
    }
`
const TripName = styled.p `
    /* background-color: ${theme.colors.cor1};   */
    padding: 8px;
    border-radius: 5px;
    font-size: 20px;       
`

const TripDetailsPage = () => {

    const [data] = UseRequestData(urlGetTrips)

    const GetTripDetail = (id) => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/aurelio/trip/${id}`)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }

    GetTripDetail()
    return(
        <>
            {
                data && data.map((tripsName) => {
                    return(
                        <TripDiv>
                            <TripName> 
                                {tripsName.name}
                                {/* onClick={() => GetTripDetail(tripsName.id)}  */}
                            </TripName>
                            {/* <TripDetails id={tripsName.id}/> */}
                        </TripDiv> 
                    
                        )
                }   )
            }
        </>
    )
}
export default TripDetailsPage