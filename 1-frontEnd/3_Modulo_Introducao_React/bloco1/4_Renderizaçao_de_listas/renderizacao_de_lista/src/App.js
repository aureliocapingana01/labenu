import React from "react";
import styled from "styled-components";
import { theme } from "./Theme";

const Section = styled.section`
  background-color: #fff;
  width: 350px;
  height: auto;
  padding: 20px;

  & div {
    display: flex;
    flex-direction: column;
    margin-bottom : 2rem;
    background-color: ${theme.colors.secundary};
  }

  & h1 {
    text-align: center;
    font-size: 30px;
  }
`;

const Card = styled.li`
  display: flex;
  justify-content: space-between;
  list-style: none;
  border-bottom: 1px solid #555;
  margin-top: 20px;
  /* width : 300px; */
`;
const Idade = styled.li`
  color: orange;
  list-style: none;
  /* margin-left : 50px */
`;




class App extends React.Component {

  state = {
    name : '',
    age : '',
    person : [
      { name: "Aurelio", age: 30, id: Math.random() },
      { name: "Castro", age: 50, id: Math.random() },
      { name: "Ana", age: 23, id: Math.random() },
      { name: "Zeferina", age: 36, id: Math.random() },
    ]
  }


  // Add nova pessoa na lista
  addPerson = () => {
  
    const newPerson = {
      id : Math.random(),
      name : this.state.name,
      age : this.state.age
    }

   const  newsPerson = [...this.state.person , 
      newPerson]

      this.setState({person : newsPerson})
  }


  
  // Fucoes para control os inputs :
  controlName = (e) => {
    this.setState ({name : e.target.value})
  }
  controlAge = (e) => {
    this.setState ({age : e.target.value})
  }
  

  // Função para deleta um item na lista:
  delete = (idDelete) => {
    const newCopy = [...this.state.person]

    const persons = newCopy.filter((item) => {
      return item.id !== idDelete
    })

    this.setState({person : persons})
  }


  // Para renderizar na tela as informações :
  render() {
    
    const personList = this.state.person.map((item) => {
        return (
            <Card>
          <li key={item}>{item.name}</li>
          <Idade> {item.age}</Idade>
          <button onClick={() => this.delete(item.id)} > X </button>
        </Card>
      );

    });

    return (
      <>
        <Section>
          <div>
            <h1> Add Person</h1>
            <input placeholder="nome" value={this.state.name}  onChange={this.controlName}/>
            <input placeholder="idade" value={this.state.age} onChange={this.controlAge} />
            <button onClick={this.addPerson} >Adicionar</button>
          </div>
          <hr></hr>
          <h1>Person List</h1>
          <ul> {personList} </ul>
        </Section>
      </>
    );
  }
}

export default App;
