import React from "react";

class Formulario extends React.Component{

    state = {
        nome: ``,
        email: `` 
    }

    nome = (e) =>{
        this.setState( {nome: e.target.value} )
    }
    email = (e) =>{
        this.setState( {email : e.target.value} )
    }

    render(){
        console.log(this.state.nome)
        console.log(this.state.email)

        return(
            <>
            <h1>Formulario</h1>

            <input placeholder="Nome" value={this.state.nome} onChange={this.nome} />

            <input placeholder="E-mail" value={this.state.email} onChange={this.email} />

            </>
        )
    }
}
export default Formulario