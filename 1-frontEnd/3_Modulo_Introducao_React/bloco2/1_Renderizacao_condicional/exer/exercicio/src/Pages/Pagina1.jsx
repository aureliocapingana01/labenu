import React from "react";
import Pagina2 from '../Pages/Pagina2'
import { Div } from "../Components/Style/Pagina";
// import { Section } from "../Components/Style/Style";


class DadosGerais extends React.Component {
    state = {
        pagina : ''
    }
    inputProximo = () => {
        this.setState({pagina : 'pagina2'})
    }
    render() {
        let proximo

        switch (this.state.pagina) {
            case 'pagina2':
                return <Pagina2 />;
            default:
                
        }

        return (
            <Div> 
                   <h2>ETAPA I - DADOS GERAIS</h2>
                   <div>
                       <label>
                           <p>1 - Qual o Nome:</p>
                           <input type="text" placeholder="Digite seu Nome" required/>
                       </label>
                       <label>
                           <p>2 - Qual a sua Idade:</p>
                           <input type="text" placeholder="Digite sua Idade" required/>
                       </label>
                       <label>
                           <p>3- Qual o melhor Email:</p>
                           <input type="text" placeholder="Digite seu melhor 
                            Email"required/>
                       </label>
                       <label>
                           <p>4 - Qual o seu grau de escolaridade</p>
                           <select>
                            <option>Ecolha sua formação</option>
                            <option>Ensino Médio Incompleto</option>
                            <option>Ensino Médio Completo</option>
                            <option>Ensino Superior Incompleto</option>
                            <option>Ensino Superior Completo</option>
                            <option>Não estudei</option>
                           </select>
                       </label>
                   </div>
               

               <button onClick={this.inputProximo} >Próximo</button>
               {proximo}
            </Div>
        )
    }
}
export default DadosGerais
