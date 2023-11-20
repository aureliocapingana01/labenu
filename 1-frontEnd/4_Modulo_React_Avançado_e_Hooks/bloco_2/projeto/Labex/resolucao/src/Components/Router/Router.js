import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../../Pages/Public/HomePage";
import AplicationPage from "../../Pages/Public/AplicationPage";
import LoginPage from "../../Pages/Private/LoginPage";
import TripsListPage from "../../Pages/Private/TripesListPage";
import CreatePage from "../../Pages/Private/CreateTripPage";
import TripDetailsPage from "../../Pages/Private/TripDetailsPage";



const Router = () => {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<HomePage />} />
                    {/* <Route path="/trips/list" element={<ListTripsPage />} /> */}
                    <Route path="/inscricao" element={< AplicationPage />} />
                    {/* Elementos da area admin */}
                    <Route path="/login" element={< LoginPage/>} />
                    <Route path="/viagens" element={<TripsListPage />} />
                    <Route path="/viagens/criar" element={< CreatePage />} />
                    <Route path="/viagens/detalhes/:tripId" element={<TripDetailsPage />} />
                    <Route path="*" element={<HomePage />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Router