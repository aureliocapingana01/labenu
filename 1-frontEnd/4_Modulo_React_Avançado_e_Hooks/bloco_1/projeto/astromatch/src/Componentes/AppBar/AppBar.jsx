import React from "react";
import { AppBarContainer } from "./StyleAppBAr";

const AppBAr = (props) => {
  return (
    <AppBarContainer>
      <button onClick={props.goToChooseProfilePage }>Escolher</button>
      <p>AstroMatch</p>
      <button onClick={props.goToMatchListPage}>Lista</button>
    </AppBarContainer>
  );
}

export default AppBAr;
