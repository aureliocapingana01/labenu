import React from 'react'

 class App extends React.Component {
  guardarTexto = () => {
    const nome = `Aurélio Manguena`
    const idade = 25
    localStorage.setItem(`nomeLS`, nome)
    localStorage.setItem(`idadeLS`, idade)
  }

  pegarTexto = () => {
    const nomePegou =  localStorage.getItem(`nomeLS`)
    const idadePegou =  localStorage.getItem(`idadeLS`)

    console.log(`O nome do usuario é: ${nomePegou}, a sua idade é: ${idadePegou}`)
  }

  guardarArray = () => {
    const array = [`1, 20, 3, 88, 54, 32, 11, 25, 5`]

    const novoArray = JSON.stringify(array) 
    localStorage.setItem(`numeros`, novoArray)
  }

  pegarArray = () => {
    const arrayLS = localStorage.getItem(`numeros`)
    const arrayNovo = JSON.parse(arrayLS)
    console.log(arrayNovo)
  }
  apagar = () =>{
    localStorage.removeItem(`nomeLS`)
  }

  render() {
    return (
      <div>
        <h1>Boa noite, Hopper!</h1>

        <button onClick={this.guardarTexto} >Guarda Texto</button>

        <button onClick={this.pegarTexto} >Pega Texto</button>

        <button onClick={this.guardarArray} >Guarda Array</button>

        <button onClick={this.pegarArray} >Pega Array</button>

        <button onClick={this.apagar}> Apagar</button>
      </div>
    )
  }
}

export default App;
