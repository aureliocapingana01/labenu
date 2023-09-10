import React from "react";
import Pagina3 from '../Pages/Pagina3'
import { Div } from "../Components/Style/Pagina";

class InfoEnsinoSuperior extends React.Component {
    state = {
        pagina : ''
    }
    inputProximo = () => {
        this.setState({pagina : 'pagina3'})
    }
    render() {
        let proximo

        switch (this.state.pagina) {
            case 'pagina3':
                return <Pagina3 />;
            default:
                
        }
        return (
            <Div>
               <div>
                   <h2>Informações do Ensino Superior</h2>
                   <label>
                       <p>5-Qual o curso:</p>
                        <input type="text" placeholder="Digite o seu curso" required/>
                   </label>
                    <label >
                        <p>6-Qual a unidade de ensino:</p>
                        <input type="text" placeholder="Digite a unidade de 
                         ensino"required/>
                    </label>
               </div>

                <button onClick={this.inputProximo} >Próximo</button>
               {proximo}
            </Div>
        )
    }
}
export default InfoEnsinoSuperior

// 1. Qual o curso? [pergunta aberta]
// 2. Qual a unidade de ensino? [pergunta aberta]