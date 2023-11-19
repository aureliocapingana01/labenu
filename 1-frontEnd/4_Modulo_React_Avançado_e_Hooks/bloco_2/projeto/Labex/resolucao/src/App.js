import React from "react";
import Router from "./Components/Router/Router";
import styled from "styled-components";
import { CssBaseline } from "@mui/material";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
`


const App = () => {
  return (
    <AppContainer>
      <CssBaseline />
        <Router />
    </AppContainer>
  );
}

export default App;
