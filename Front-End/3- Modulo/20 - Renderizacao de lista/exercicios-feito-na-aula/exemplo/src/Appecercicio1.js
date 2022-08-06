
import React from "react";
// import App from "./App";

class App extends React.Component{

    listaComponentes = [
    "Item 1 ",
    "Item 2 ",
    "Item 3 "
  ]

  listaDados = this.listaComponentes.map(( dado ) => {
    return <li key={dado}> { dado } </li>
  })

  render() {

    return (
      <div> 
        <ul> { this.listaDados } </ul>
      </div>
    );
  }
};

export default App
  
  



//   listaComponentes = [
//     "Item 1 ",
//     "Item 2 ",
//     "Item 3 "
//   ]

//   listaDados = this.listaComponentes.map(( dado ) => {
//     return <li key={dado}> { dado } </li>
//   })

//   render() {

//     return (
//       <div> 
//         <ul> { this.listaDados } </ul>
//       </div>
//     );
//   }
// };
