import React from "react";
import { ThemeProvider } from "styled-components";
import Rout from "./routes/Rout";
import theme from "./constants/themas";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <h1>Cookenu</h1>
       <Rout/>
    </ThemeProvider>
  );
}

export default App;
