import { Box, Button } from "@mui/material"
import React from "react"
import { ButtonContainer, HomeContainer } from "./style"
import { Link } from "react-router-dom"



const HomePage = () => {

    // const navigate = useNavigate()

    return(
        <HomeContainer>

            <ButtonContainer>
                <Link to={'/applicatioForm'}>
                    <Button variant={'outlined'}>Candidatar a uma viagem</Button>
                </Link>
                
                <Link to={'/login'}>
                    <Button variant={'contained'}>Área do Admin</Button>
                </Link>
            </ButtonContainer>

        </HomeContainer>

    )
}

export default HomePage