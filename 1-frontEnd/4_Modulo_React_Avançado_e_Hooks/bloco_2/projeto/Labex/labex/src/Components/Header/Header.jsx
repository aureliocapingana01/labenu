import React from "react";
import styled from "styled-components";
import { theme } from "../../Theme";

const HeaderContainer = styled.div `
    text-align: center;
    font-size: 30px;
    font-weight: 900;
    margin: auto;
    background-color: ${theme.colors.cor1};
    width: 100%;
    padding: 10px 0;
    border-radius: 10px;
    
    h1{
        color: ${theme.colors.cor3};
    }
`
const Header = () => {
    return (
        <HeaderContainer>
            <h1>LabeX</h1>
        </HeaderContainer>
    )
}

export default Header