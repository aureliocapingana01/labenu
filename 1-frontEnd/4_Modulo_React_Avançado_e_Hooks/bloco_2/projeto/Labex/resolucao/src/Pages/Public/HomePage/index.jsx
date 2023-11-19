import React from "react";
import { Button, Typography} from "@mui/material";
import { Link } from "react-router-dom";
import { ButtonsContainer } from "./style";



const HomePage = () => {
    return(
        <>
           <Typography variant="h1" align="center" gutterBottom>
                Labex
           </Typography>

            <ButtonsContainer>
                <Link to={'/inscricao'}>
                    <Button variant={'outlined'} >Quero me Candidatarr</Button>
                </Link>
                <Link to={'/login'}>
                    <Button variant={'contained'} color="primary">Àrea do Administrador</Button>
                </Link>
            </ButtonsContainer>

        </>
    )
}

export default HomePage