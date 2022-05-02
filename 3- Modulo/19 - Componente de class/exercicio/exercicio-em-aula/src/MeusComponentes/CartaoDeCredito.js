import React from "react";

class CartaoDeCredito extends React.Component{

    state ={
        nome:``,
        Numero:``,
        cvv:``
    }

    nome = (e) => {
        this.setState( {nome: e.target.value} )
    }

    numero = (e) => {
        this.setState( {numero: e.target.value} )
    }

    cvv = (e) => {
        this.setState( {cvv: e.target.value} )
    }

    enviar = () =>{
        console.log(`Nome: `, this.state.nome)
        console.log(`Numero: `, this.state.numero)
        console.log(`Cvv: `, this.state.cvv)

        this.setState({nome:``, numero:``, cvv:``})
    }

    render(){

        return(
            <>
              <h2> Cartao de Credidto </h2>
              <hr></hr>

              <div>
                  <p>
                      <strong>Nome: </strong>
                      {this.state.nome}
                  </p>
                  <p>
                      <strong>Numero: </strong>
                      {this.state.numero}
                  </p>
                  <p>
                      <strong>Cvv: </strong>
                      {this.state.cvv}
                  </p>
              </div>

              <div>
                  <input placeholder="Nome Completo" value={this.state.nome} onChange={this.nome} />

                  <input type={"Number"} placeholder="Numero do Cartão" value={this.state.numero} onChange={this.numero} />

                  <input type={"Number"} maxLength={"3"}placeholder="Cvv" value={this.state.cvv} onChange={this.cvv} />
              </div>

              <button onClick={this.enviar} >Enviar</button>

            </>
        );
    }
}
export default CartaoDeCredito