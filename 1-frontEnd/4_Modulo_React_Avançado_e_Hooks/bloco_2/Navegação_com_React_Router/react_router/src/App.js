import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from "./Pages/HomePages";
import AdminPage from "./Pages/AdminPages";
import ErrorPage from "./Pages/ErrorPage";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/admin"} element={<AdminPage />} />
          <Route path={"*"} element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;