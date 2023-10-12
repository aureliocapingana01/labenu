import React, { useState } from "react";

const Contador = () => {

    //  Declaracao do estado, usamdo o useState
  const [valorContador , setValorContador] = useState(0)


    //  Funcao para set o estado
  const mudarValor = (operacao) => {
    if (operacao === '+') {
      setValorContador(valorContador + 1)
    }
    else if (operacao === '-') {
      setValorContador(valorContador - 1)
    }

  }

  return (
   <>
      <h3>Componente funcional</h3>
      <p> {valorContador} </p>

      <button onClick={() => mudarValor('+')} >+</button>
      <button onClick={() => mudarValor('-')} >-</button>
   </>
  );
}

export default Contador;
