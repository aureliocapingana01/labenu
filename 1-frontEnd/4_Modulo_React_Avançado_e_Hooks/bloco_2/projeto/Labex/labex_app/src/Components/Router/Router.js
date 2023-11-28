import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "../../Home"
import ApplicationFormPage from "../../Pages/Public/ApplicationForm"
import Login from "../../Pages/Private/Login"
import LoginPage from "../../Pages/Private/Login"
import TripListPage from "../../Pages/Private/tripList"
import CreateTripPage from "../../Pages/Private/CreateTrip"
import TripDetailsPage from "../../Pages/Private/TripDetails"


export const Router = () => {
    return(
        <>
          <BrowserRouter>
            <Routes>
                <Route index element={<HomePage/>} />
                <Route path="/applicatioForm" element={<ApplicationFormPage/>} />
                <Route path="/login" element={<LoginPage/>} />
                <Route path="/tripList" element={<TripListPage/>} />
                <Route path="/createTrip" element={<CreateTripPage/>} />
                <Route path="/tripDetails" element={<TripDetailsPage/>} />
            </Routes>
          </BrowserRouter>
        </>
    )
}