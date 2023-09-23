import axios from "axios";
import React from "react";
import { List, TelaDeUsuario } from "./Style";

class Usuario extends React.Component {
    state = {
        arrUser : []
    }
    componentDidMount() {
        this.getAllUsers()
    }

    getAllUsers = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', {
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
    
  render() {
    const listUser = this.state.arrUser.map((user) => {
        return (
            <List>
                {user.name}
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
