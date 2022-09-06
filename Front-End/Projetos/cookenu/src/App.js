import React from "react";
import { ThemeProvider } from "styled-components";
import Rout from "./routes/Rout";
import theme from "./constants/themas";
import { dividerClasses } from "@mui/material";

const App = () => {
  return (
    <div>

      <Rout/>
      <h1>Cookenu</h1>
    </div>
    // <ThemeProvider theme={theme}>
    // </ThemeProvider>
  );
}

export default App;
