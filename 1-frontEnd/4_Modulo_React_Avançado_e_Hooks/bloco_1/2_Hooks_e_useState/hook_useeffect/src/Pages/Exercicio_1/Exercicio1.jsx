import React, { useEffect, useState } from "react";

const Exercicio1 = () => {
    const [contador, setContador] = useState(0)

    const somarContador = () => {
        setContador(contador + 1 )
    }
    const subtrairContador = () => {
        setContador(contador - 1 )
    }

    // Renderiza apenas uma vez 
    useEffect(() => {
        console.log('useEffect com array vazio')
    }, [])

    // Renderiza sempre que houver uma mudaça ou atualização 
    useEffect(() => {
        console.log('useEffect com array vazio preenchido')
    }, [contador])

  return (
   <>
        <h2>Primeiro Exercicio - Contador</h2>

        <p>{contador}</p>
        <button onClick={somarContador}>+</button>
        <button onClick={subtrairContador}>-</button>
   </>
  );
}

export default Exercicio1;
