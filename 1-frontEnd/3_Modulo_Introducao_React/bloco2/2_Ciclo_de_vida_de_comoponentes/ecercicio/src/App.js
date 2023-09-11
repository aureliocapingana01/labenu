import React from "react";


class App extends React.Component {
  state = {
    cpf: '',
    name : '',
    age : '',
    email : ''
  }

  // Pega os dados assim que o site e aberto 
  componentDidMount() {
    console.log('Voce acessou o nosso site')
    this.buttonPegar()
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.name !== this.state.name) {
      console.log('Atualizou o estado do nome')
      localStorage.setItem('userName', this.state.name)
    }
    
    if(prevState.age !== this.state.age) {
      console.log('Atualizou o estado da idade')
      localStorage.setItem('userAge', this.state.age)
    }
    if(prevState.email !== this.state.email) {
      console.log('Atualizou o estado do email')
    localStorage.setItem('userEmail', this.state.email);
    }
    if(prevState.cpf !== this.state.cpf) {
      console.log('Atualizou o estado do cpf')
      localStorage.setItem('userId', this.state.cpf)
    }

    
  }

  inputCpf = (e) => {
    this.setState({cpf : e.target.value})
  }
  inputNome = (e) => {
    this.setState({name : e.target.value})
  }
  inputIdade = (e) => {
    this.setState({age : e.target.value})
  }
  inputEmail = (e) => {
    this.setState({email : e.target.value})
  }

  buttonSalvar = () => {     
    // localStorage.setItem('userId', this.state.cpf)
    // localStorage.setItem('userName', this.state.name)
    // localStorage.setItem('userAge', this.state.age)
    // localStorage.setItem('userEmail', this.state.email);

    // this.setState({
    //   cpf : '',
    //   name : '',
    //   age : '',
    //   email : ''
    // });

  };

  buttonPegar = () => {   
    this.setState ({
      cpf : localStorage.getItem('userId'),
      name : localStorage.getItem('userName'),
      age : localStorage.getItem('userAge'),
      email : localStorage.getItem('userEmail')
    })  

  }
 render () {
  return (
    <>
      <h1>Exercicio feito na aula</h1>
      <p>CPF: </p>
      <input onChange={this.inputCpf}  value={this.state.cpf} />
      <p>Nome: </p>
      <input onChange={this.inputNome} value={this.state.name} />
      <p>Idade:</p>
      <input onChange={this.inputIdade} value={this.state.age} />
      <p>Email:</p>
      <input onChange={this.inputEmail} value={this.state.email} />
      {/* <button onClick={this.buttonSalvar} >Salva Informações</button> */}
      {/* <button onClick={this.buttonPegar} >Pegar Informações</button> */}
    </>
  )
 }
}

export default App;
