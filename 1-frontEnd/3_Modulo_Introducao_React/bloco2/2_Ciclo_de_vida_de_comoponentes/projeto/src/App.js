import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
  /* background-color: ${({completa}) => (completa ? 'green' : 'red')}; */
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [],
      inputValue: '',
      filtro: ''
    }

  // componentDidUpdate() {
  //     const arrTarefas = this.state.tarefas
  //     const guardaLocalStorage = JSON.stringify(arrTarefas)
  
  //     localStorage.setItem('user', guardaLocalStorage ) 
  // };

  // componentDidMount() {
  //   console.log(localStorage.getItem('user'))
  // };

  onChangeInput = (e) => {
    this.setState({inputValue : e.target.value})
  }

  criaTarefa = () => {
    const newTarefa = {
      id : Date.now(),
      texto : this.state.inputValue,
      completa : false
    }
    console.log(this.state.tarefas.texto)
    
    const addTarefas = [...this.state.tarefas, newTarefa]
    this.setState({
      tarefas : addTarefas,
      inputValue : ''
    })
  }

  selectTarefa = (id) => {
    const newTarefa = this.state.tarefas.map((tarefas) => {
      if(id === tarefas.id) {
        const tarefa = {
          ...tarefas,
          completa : true
        }
        return tarefa
      }
      else {
        return tarefas
      }
    })

    this.setState({tarefas : newTarefa})
  }

  onChangeFilter = (e) => {
    this.setState({filtro : e.target.value})
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
