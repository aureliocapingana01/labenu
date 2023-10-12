import React, { useState } from "react"


const InputControlado = () => {

    //  Declaracao dos estados
    const [inputValue, setInputValue] = useState('')
    const [lista, setLista] = useState([
        {id: 1, texto: 'banana'},
        {id: 2, texto: 'maçã'},
        {id: 3, texto: 'leite'}
    ])


    //  Funcao para controla o input
    const controlInput = e => {
        setInputValue( e.target.value)
    }


    //  Funcao para aidicionar o item na lista 
    const addItem = () => {
        const novoItem = {
            id : Date.now(),
            texto : inputValue,
        }

        const novaLista = [...lista, novoItem]

        setLista(novaLista)
        setInputValue('')
    }


    const listaRedenrizada = lista.map((item) => {
        return <li key={item.id}>
            {item.texto}
        </li>
    }) 


    return(
        <>
            <h2>Exercicio da aula</h2>

            <input placeholder="Adiciona o item" 
            value={inputValue} 
            onChange={controlInput}
            />
            <button onClick={addItem} >Adicionar </button>
            <h4>Lista</h4>
            {listaRedenrizada}
            <h6>Opem Time - Aurélio Capingana</h6>
        </>
    ) 
}
export default InputControlado