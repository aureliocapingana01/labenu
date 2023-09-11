import React from 'react';



class App extends React.Component {

   // Função para guardar texto no localStorage
  guardarTexto = () => {
    const name = 'Aurélio'
    const  age = 30
    const id = Math.random()
    localStorage.setItem('userName', name)
    localStorage.setItem('userAge', age)
    localStorage.setItem('userId', id)
  }

   // Função para pegar texto no localStorage
  pegarTexto = () => {
    const usuario = localStorage.getItem('userName')
    const idade = localStorage.getItem('userAge')
    const cpf = localStorage.getItem('userId')
    console.log(`Nome : ${usuario}, Idade : ${idade}, CPF : ${cpf}`)

  }

   // Função para transformar array ou objeto em string
  guardarArray = () => {
    const person = {
      id : Math.random(),
      name : 'Aurélio Capingana',
      age : 30,
    }

    const infoPerson = JSON.stringify(person)
    localStorage.setItem('user', infoPerson)
  }

  // Função para transformar string em array ou objeto
  pegarArray = () => {
    const usuario = localStorage.getItem('user')
    const infoUsuario = JSON.parse(usuario)
    console.log(infoUsuario)
  }

   // Função para apagar item no localStorage
   apagarItem = () => {
    localStorage.removeItem('userName')
   }

  render() {
    return (
      <div>
        <button onClick={this.guardarTexto} >Guardar texto</button>
        <button onClick={this.pegarTexto} >Pegar Texto</button>
        <button onClick={this.guardarArray} >Guardar Array</button>
        <button onClick={this.pegarArray} >Pegar Array</button>
        <button onClick={this.apagarItem} >Pagar Item</button>
      </div>
    )
  }
}

export default App;
