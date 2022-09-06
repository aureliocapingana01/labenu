import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AddReciPage from "../pages/AddReciPage/AddReciPage";
import ErroPage from "../pages/ErroPage/ErroPage";
import LoginPage from "../pages/LoginPage/LoginPage"
import ReciDetalhePage from "../pages/ReciDetalhePage/ReciDetalhePage";
import ReciListPage from "../pages/ReciListPage/ReciListPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";





const Rout = () => {
    return (

        // <Router>
        //     <Routes>
        //         <Route path="/" element={<LoginPage/>}  />
        //     </Routes>
        // </Router>

        <Router>
            <Routes>
                //exact path. brawserRoute, switch, route
                <Route path="/login" element={<LoginPage/>} /> 
                <Route path="/cadastro" element={ <SignUpPage/>} />
                <Route path="/" element={<ReciListPage/>} />   
                <Route path="/adicionar-receita" element={<AddReciPage/>} />
                <Route path="/detalhe/:id" element={<ReciDetalhePage/>} />
                <Route path="*" element={<ErroPage/>} />
            
            </Routes>
        </Router>
    )
}
export default Rout;