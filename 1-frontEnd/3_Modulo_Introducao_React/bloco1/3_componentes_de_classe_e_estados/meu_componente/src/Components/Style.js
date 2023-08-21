import styled from 'styled-components'
import { theme } from '../Theme'

export const Section = styled.section `
width : 500px;
height : 100vh;
margin : auto;
padding :20px;
background-color : ${theme.colors.primary};
box-shadow : 1px 2px 2px ${theme.colors.secundary};

& h1 {
    font-size : 2.5rem;
    text-align: center;
}

& div {
    background-color : ${theme.colors.secundary};
    display : flex;
    flex-direction : column;
    margin-top : 50px;
    margin-bottom : 50px;
    padding : 10px;
    justify-content: center;

    & h2 {
        text-align: center;
        font-size : 1.8rem
        margin-bottom : 20px;  
    }
    & p {
        margin-bottom : 10px;
        border-bottom : 1px solid rgba(0,0,0, 0.2)
    }
    & input {
        text-decoration : none;
        padding : 4px;
        margin-bottom : 10px;
        box-shadow: 0 0 0 0;
        border: 0 none;
        /* border-bottom : 1px solid rgba(0,0,0, 0.2) */
        outline: 0;
    }
}
& button {
    width : 100%;
    padding : 10px 5px;
    font-size : 20px;
    /* transition: 1s ease-out; */
    transform : 1s ease;

    &:hover {
        background-Color : ${theme.colors.secundary1};
        color : ${theme.colors.secundary};
        transition: 1s ease-out;
    }
}

`
