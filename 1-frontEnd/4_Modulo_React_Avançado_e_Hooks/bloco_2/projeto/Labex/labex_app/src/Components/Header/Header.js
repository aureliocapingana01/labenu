import { Typography } from "@mui/material"
import styled from "styled-components"

const HeaderContainer = styled.div`
    /* background-color: red; */
    margin-top: 0;
    height: 100px;
    width: 100%;
`

export const Header = () => {
    return (
        <HeaderContainer>
            <Typography variant="h1" align="center" color={'#01416b'} gutterBottom>
                Labex
            </Typography>
        </HeaderContainer>
    )
}