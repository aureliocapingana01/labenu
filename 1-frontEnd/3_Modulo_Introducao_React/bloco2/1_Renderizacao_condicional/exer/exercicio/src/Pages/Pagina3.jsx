import React from "react";
import Pagina4 from '../Pages/Pagina4'
import { Div } from "../Components/Style/Pagina";

class InfoGeraisDeEnsino extends React.Component {
    state = {
        pagina : ''
    }
    inputProximo = () => {
        this.setState({pagina : 'pagina4'})
    }
    render() {
        let proximo

        switch (this.state.pagina) {
            case 'pagina4':
                return <Pagina4 />;
            default:
                
        }
        return (
            <Div>
               <div>
                   <h2>INFORMAÇÕES GERAIS DE ENSINO</h2>
                   <label>
                       <p>5 - Por que você não terminou um curso de graduação?</p>
                       <input type="text" placeholder="Digite o motivo" required/>
                   </label>
                   <label>
                       <p>6 - Você fez algum curso complementar?</p>
                       <select >
                        <option>Nenhum</option>
                        <option>Curso Tecnico</option>
                        <option>Curso de Ingles</option>
                       </select>
                   </label>
               </div>

               <button onClick={this.inputProximo} >Próximo</button>
               {proximo}

            </Div>
        )
    }
}
export default InfoGeraisDeEnsino