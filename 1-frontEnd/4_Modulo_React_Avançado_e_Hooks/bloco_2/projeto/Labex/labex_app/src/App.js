import styled from "styled-components";
import { Router } from "./Components/Router/Router";
import { Header } from "./Components/Header/Header";

const ContainerApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  width: 550px;
  padding: 0 10px;
  /* border: 1px solid black; */
  height: 100vh;
  background-color: #fff;
  box-shadow: 0.5px 0.5px 1px 0.5px rgba(0,0,0,0.5);
`

const App = () => {
  return (
    <ContainerApp>
      <Header/>
      <Router/>
    </ContainerApp>
  );
}

export default App;
