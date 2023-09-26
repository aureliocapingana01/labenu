import axios from "axios";
import React from "react";

class TelaDeCadastro extends React.Component {

    state = {
        name : '',
        email : ''
    }

    controlName = e => {
        this.setState({name : e.target.value})
    }
    controlEmail = e => {
        this.setState({email : e.target.value})
    }

    createUser = async () => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
        const body = {
            name : this.state.name,
            email : this.state.email
        }

        // axios.post(url, body, {
        //     headers : {
        //         Authorization : 'aurelio-capingana-hopper'
        //     }
        // })
        // .then(() => {
        //     alert('Usuário cadastrado com sucesso')
        // })
        // .catch(() => {
        //     alert('Erro, tente novamente ')
        // })
        // .finally(() => {
        //     this.setState({
        //         name : '',
        //         email : ''
        //     })
        // })


        // Com Try e Catch; async/await
        try {
            await axios.post(url, body, {
                headers : {
                    Authorization : 'aurelio-capingana-hopper'
                }
            })
            alert('Usuário cadastrado com sucesso')
        }
        catch(error) {
            alert('ERRo, Usuário não cadastrado')
        }
    }
    render() {
        return (
            <>
            <button onClick={this.props.userCadastro} >Troca de Tela</button>

              <h1>Tela de Cadastro</h1>
              <input placeholder="Digite o seu nome" 
               value={this.state.name}
               onChange={this.controlName}
              />

              <input placeholder="Digite o seu email" 
               value={this.state.email}
               onChange={this.controlEmail}  
              />

              <button 
              onClick={this.createUser} >Cadastrar</button>
            </>
        )
    }
}
export default TelaDeCadastro