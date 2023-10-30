import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../../Pages/HomePage";
import ListTripsPage from "../../Pages/Publica/ListTripsPage/ListTripsPage";
import ApplicationFormPage from "../../Pages/Publica/ApplicationFormPage/ApplicationFormPage";
import LoginPage from "../../Pages/Privada/LoginPage/LoginPage";
import AdminHomePage from "../../Pages/Privada/AdminHomePage/AdminHomePage";
import CreateTripPage from "../../Pages/Privada/CreateTripPage/CreateTripPage";
import TripDetailsPage from "../../Pages/Privada/TripDetailsPage/TripDetailsPage";

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/trips/list" element={<ListTripsPage />} />
                    <Route path="/trips/application" element={<ApplicationFormPage />} />
                    {/* Elementos da area admin */}
                    <Route path="/login" element={<LoginPage/>} />
                    <Route path="/admin/trips/list" element={<AdminHomePage />} />
                    <Route path="/admin/trips/create" element={<CreateTripPage />} />
                    <Route path="/admin/trips/:id" element={<TripDetailsPage />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Router