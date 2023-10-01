import React from "react";
import styled from "styled-components";


const HeaderContainer = styled.div `
 height: 100px;
 display: flex;
 align-items: center;
 justify-content: space-around;

 button {
    margin-left: 50px;
 }
`

const Header = (props) => {
    return (
        <HeaderContainer>
           <h1>LabeFy</h1> 
           <div>
            <button onClick={() => props.trocarDeTela("create")} >Cadastrar Playlist</button>
            <button onClick={() => props.trocarDeTela("gerenciar")} >Geranciar Playlist</button>
           </div>
        </HeaderContainer>
    )
}
export default Header