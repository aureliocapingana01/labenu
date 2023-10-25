import React from "react";
import { ButtonsContainer } from "./StyleChooseButton";
// import axios from "axios";

const ChooseButtons = (props) => {

  return (
    <ButtonsContainer>
      <button onClick={props.onClickNo} >Não</button>
      <button onClick={props.onClickYes} >Sim</button>
    </ButtonsContainer>
  );
}

export default ChooseButtons;
