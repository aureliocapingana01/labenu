import styled from "styled-components"

export const Card = styled.div `
 border: 1px solid black;
 display: flex;
 flex-direction: column;
`
export const CardText = styled.div `
 display: flex;
 flex-direction: column;
 /* padding: 20px; */
 p{
    margin: 0 16px;
 }
 button{
    margin: 16px;
    /* padding: 5px; */
    align-self: center;
    width: 70%;
 }
`