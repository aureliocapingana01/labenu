import { Box, Button, Typography } from "@mui/material"
import React from "react"
import { ButtonContainer } from "./style"
import { Link } from "react-router-dom"
// import { useNavigate } from "react-router-dom"
// import { useNavigate } from "react-router-dom"


const HomePage = () => {

    // const navigate = useNavigate()

    return(
        <Box sx={{ width: '100%', maxWidth: 500 }}>

            <ButtonContainer>
                <Link to={'/applicatioForm'}>
                    <Button variant={'outlined'}>Candidatar a uma viagem</Button>
                </Link>
                
                <Link to={'/login'}>
                    <Button variant={'contained'}>Área do Admin</Button>
                </Link>
            </ButtonContainer>

        </Box>

    )
}

export default HomePage