import React from 'react'

class App extends React.Component {

  state = {
    nome: ``,
    email: ``,
    idade: ``
  }

  guardarNome = (e) =>{
    this.setState( {nome: e.target.value} )
  }

  guardarEmail = (e) =>{
    this.setState( {email: e.target.value} )
  }

  guardarIdade = (e) =>{
    this.setState( {idade: e.target.value} )
  }

  salvar = () =>{
    localStorage.setItem(`nomeLS` , this.state.nome)
    localStorage.setItem(`emailLS` , this.state.email)
    localStorage.setItem(`idadeLS` , this.state.idade)
  }

  pegar = () =>{
    const nomeLS = localStorage.getItem(`nome`)
    const emailLS = localStorage.getItem(`email`)
    const idadeLS = localStorage.getItem(`idade`)

    this.setState({
      nome: nomeLS, 
      email:emailLS, 
      idade:idadeLS
    })
  }

 
  render() {

    // console.log(this.state) usado para ver o controle do input no console 

    return (
      <> 

      <h1>Exercicio login de Usuario</h1>

      <p>Nome: </p>
      <input value={this.state.nome} onChange={this.guardarNome} />

      <p>Email: </p>
      <input value={this.state.email} onChange={this.guardarEmail} />

      <p>idade: </p>
      <input value={this.state.idade} onChange={this.guardarIdade} />

      <div>

      <button onClick={this.salvar} >Salvar</button>
      <button onClick={this.pegar} >Pegar</button>

      </div>

      </>
    )
  }
}

export default App;
