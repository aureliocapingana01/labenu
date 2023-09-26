import axios from "axios";
import React from "react";
import { List, TelaDeUsuario } from "./Style";

class Usuario extends React.Component {
    state = {
        arrUser : [],
        
    }
    componentDidMount() {
        this.getAllUsers()
    }

    getAllUsers = () => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'

        axios.get(url, {
            headers : {
                Authorization : 'aurelio-capingana-hopper'
            }
        })
        .then((res) => {
            this.setState({arrUser : res.data})   
        })
        .catch((error) => {
            console.log(error)
        })
    }

    deleteUser = (id) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, {
            headers : {
                Authorization : 'aurelio-capingana-hopper'
            }
        })
        .then(() => {
              alert('Usuario deletado com sucesso')
              this.getAllUsers()
        })
        .catch((error) => {
            console.log(error)
        })  
    }

    
  render() {
    const listUser = this.state.arrUser.map((user) => {
        return (
            <List>
                <div>{user.name} </div> <div><button onClick={() => this.deleteUser(user.id)} >deletar</button></div>
            </List>
        )
    })

    return (
      <TelaDeUsuario>
        <h2>Tela de Usuarios</h2>
        {listUser}
        <button onClick={this.props.clickUsuario}>Tela de Cadastro</button>
      </TelaDeUsuario>
    );
  }
}

export default Usuario;
