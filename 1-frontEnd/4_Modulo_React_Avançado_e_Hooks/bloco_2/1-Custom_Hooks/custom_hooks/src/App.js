// import axios from "axios";
import React from "react";
import { UseRequestData } from "./Hooks/UseRequestData";

const App = () => {

  const [data, loading, err] = UseRequestData('https://hp-api.onrender.com/api/characters')

  // Podemos usar mais de uma url :
  // const segundaRequisicao = UseRequestData('https://hp-api.onrender.com/api/characters/students')
  // console.log('Ola ', segundaRequisicao) 

  const wizardsList = data && data.map((person, id) => {
    return <p key={id}>{person.name}</p>
  })

  return (
    <div >
      {/* {wizardsList} */}
      {
        loading && <p>Carregando...</p>
      }
      {
        !loading && err && <p>Erro na requisicao</p>
      }
      {
        !loading && data && data.length > 0 && wizardsList
      }
      {
        !loading && data && data.length === 0 && <p>Não existe nenhum dados </p>
      }
    </div>
  );
}

export default App;
