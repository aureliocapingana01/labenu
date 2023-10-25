import axios from "axios";
import React from "react";

const ResetButton = () => {

  const onClickReset = () => {
    axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aurelio/clear')
    .then(res => {
      // console.log(res)
    })
  }

  return (
    <div>
         <button onClick={onClickReset} >Resetar curtidas e matches</button>
    </div>
  );
}

export default ResetButton;
