import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ErroPage from "../Pages/Erro/Erro"
import DetailsPage from "../Pages/Deteils/Details"
import LoginPage from "../Pages/Login/Login"


export const Router = () => {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<LoginPage/>} />
                    <Route path="details" element={<DetailsPage/>} />
                    <Route path="*" element={<ErroPage/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}