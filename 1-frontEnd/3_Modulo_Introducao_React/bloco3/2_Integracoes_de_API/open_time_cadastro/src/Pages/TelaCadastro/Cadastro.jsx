import axios from "axios";
import React from "react";
import { Inputs, TelaDeCadastro } from "./Style";

class Cadastro extends React.Component {
    state = {
        name : '',
        email : ''
    }

    controlName = (e) =>{
        this.setState({name : e.target.value})   
    }
    controlEmail = (e) =>{
        this.setState({email : e.target.value})
    }

    createUser = () => {
        const body = {
            name : this.state.name,
            email : this.state.email
        }

        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body, {
            headers : {
                Authorization : 'aurelio-capingana-hopper'
            }
        })
        .then(() => {
            this.setState({
                name : '',
                email: ''
            })
            alert('Cadastrado com sucesso')
        })
        .catch((err) => {
            console.log("Erro", err.response.data)
        })
    }
   
  render() {
    
      return (
      <TelaDeCadastro>
        <h2>Tela de Cadastro</h2>

        <Inputs>
            <label htmlFor="">Nome:
            <input type="text" placeholder="Digise seu nome" 
            value={this.state.name} onChange={this.controlName}
            />
            </label>
            
            <label htmlFor="">Email:
            <input type="text" placeholder="Digise seu email" 
            value={this.state.email} onChange={this.controlEmail}
            />
            </label>
            <button onClick={this.createUser}>Cadastrar Usuário</button>
        </Inputs>

        <button onClick={this.props.clickCadastro} >Tela de Usuario</button>
      </TelaDeCadastro>
    );
  }
}

export default Cadastro;
