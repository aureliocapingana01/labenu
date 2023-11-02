import React from "react";
import styled from "styled-components";
import { theme } from "../../Theme";

const FooterContainer = styled.div `
    /* flex-shrink: 0; */
    /* flex: 3; */
    text-align: center;
    /* font-size: 30px; */
    /* font-weight: 900; */
    /* margin: auto; */
    background-color: #555;
    width: 100%;
    padding: 10px 0;
    
`
const Footer = () => {
    return(
        <FooterContainer>
            <p>Todos os direitos reservados</p>
            <p>Site criado por : <span>Aurélio Capingana</span> </p> 
            <h4>Kilimanjaro</h4>
        </FooterContainer>
    )
}

export default Footer