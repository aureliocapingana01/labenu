import React from "react";
import PageTitle from "../../../Components/PageTitle/PageTitle";
import {Button, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import {TripListPageContainer } from "./style";
import { UserTripList } from "../../../Components/Hooks/userTripList";
import { UserProtectdPage } from "../../../Components/Hooks/useProtectedPage";


const TripsListPage = () => {

  const trips = UserTripList()

  UserProtectdPage()

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
          {
            trips.map((trip) => {
              return  <Link to={`/viagens/detalhes/${trip.id}`} >
              <ListItem disablePadding Button>
                <ListItemButton>
                  <ListItemText primary={trip.name} />
                </ListItemButton>
              </ListItem>
            </Link>
            })
          }
        </List>
      </nav>
    </TripListPageContainer>
  );
};

export default TripsListPage;
