import React from "react";
import PageTitle from "../../../Components/PageTitle/PageTitle";
import {
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import {TripListPageContainer } from "./style";

const TripsListPage = () => {
  return (
    <TripListPageContainer>
      <PageTitle title={"Lista de Vaigens"} />

      <Link to={"/viagens/criar"}>
        <Button variant={"contained"} color="primary">
          Criar Viagem
        </Button>
      </Link>

      <nav aria-label="secondary mailbox folders">
        <List>
          <Link to={'/viagens/detalhes'} >
            <ListItem disablePadding Button>
              <ListItemButton>
                <ListItemText primary="Viagem para Marte" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to={'/viagens/detalhes'} >
            <ListItem disablePadding Button>
              <ListItemButton component="a" href="#simple-list">
                <ListItemText primary="Viagem para a lua" />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
      </nav>

      {/* <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Trash" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="Spam" />
            </ListItemButton>
          </ListItem>
        </List> */}
    </TripListPageContainer>
  );
};

export default TripsListPage;
