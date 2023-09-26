import axios from "axios";
import React from "react";

class TelaDeLista extends React.Component {

    state = {
        listUser : []
    }

    componentDidMount() {
        this.getAllUser()
    }
    getAllUser = () => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
        axios.get(url, {
            headers : {
                Authorization : 'aurelio-capingana-hopper'
            }
        })
        .then((res) => {
            this.setState({listUser : res.data})
        })
        .catch((err) => {
            console.log(err.response)
        })
    }

    deleteUser = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        axios.delete(url, {
            headers : {
                Authorization : 'aurelio-capingana-hopper'
            }
        })
        .then(() => {
            alert('Usuario deletado com sucesso')
          this.getAllUser()  
        })
        .catch(() => {
            alert('Tente mais tarde')
        })
    }


    render() {
        return (
            <>
            <button onClick={this.props.userLista} >Trocar de Tela</button>
              <h1>Tela de Lista</h1>
              {
                this.state.listUser.map((user) => {
                 return (
                    <ul>
                        <li> {user.name} </li>
                        <button onClick={() => this.deleteUser(user.id)}>Deletar</button>
                    </ul>
                 )   
                })
              }
            </>
        )
    }
}
export default TelaDeLista