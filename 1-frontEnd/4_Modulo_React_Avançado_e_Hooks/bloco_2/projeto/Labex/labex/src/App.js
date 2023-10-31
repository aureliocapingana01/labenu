import React from "react";
import Header from "./Components/Header/Header";
import Router from "./Components/Router/Router";
import styled from "styled-components";

const Container = styled.div `
  width: 500px;
  margin: auto;
  padding: 2rem;
  border: 1px solid black;
  /* text-align: center; */
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */

`

const App = () => {
  return (
    <Container>
      <Header />
      <Router />
    </Container>
  );
}

export default App;
