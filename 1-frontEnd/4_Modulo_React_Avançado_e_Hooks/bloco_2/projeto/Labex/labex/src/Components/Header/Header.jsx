import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div `
    text-align: center;
    font-size: 33px;
    font-weight: 900;
    margin: auto;
`
const Header = () => {
    return (
        <HeaderContainer>
            <h1>LabeX</h1>
        </HeaderContainer>
    )
}

export default Header