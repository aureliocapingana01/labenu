import React from "react";
import Header from "./Components/Header/Header";
import Router from "./Components/Router/Router";
import styled from "styled-components";
// import Footer from "./Components/Footer/Footer";

const Main = styled.main `
  width: 550px;
  margin: auto;
  /* box-shadow: 0px 0px 4px rgba(0,0,0,0.1); */
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;

`
const Container = styled.div `
  padding: 2rem;
  /* flex: 1 1 0; */

`

const App = () => {
  return (
    <Main>
      <Header />
      <Container>
        <Router />
      </Container>
    </Main>
  );
}


export default App;