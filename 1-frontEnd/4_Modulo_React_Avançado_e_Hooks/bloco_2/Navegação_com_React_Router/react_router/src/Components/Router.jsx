import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePages";
import AdminPage from "../Pages/AdminPages";
import ErrorPage from "../Pages/ErrorPage";
import UserPage from "../Pages/UserPage";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/admin"} element={<AdminPage />} />
          <Route path={"*"} element={<ErrorPage />} />

          {/*  uso do path param */}
          <Route path={"/user/:id"} element={<UserPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Router;
