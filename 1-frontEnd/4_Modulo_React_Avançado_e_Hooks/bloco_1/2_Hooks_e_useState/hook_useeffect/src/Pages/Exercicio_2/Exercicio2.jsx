import React, { useEffect, useState } from "react";
import axios from "axios";
import {baseUrl1 } from "../../Constante/Constantes";

const Exercicio2 = () => {

    const [person, setPerson] = useState([])
    const [getPerson, setGetPerson] = useState('')
    const [yearNasci, setYearNasc] = useState('')

    const personSelect = e => {
        setGetPerson(e.target.value)
    }
    
    
    useEffect(() => {
            axios.get(baseUrl1)
            .then(res => {
                setPerson(res.data.results)
            
            })
            .catch(err => {
                console.log(err)
            })

    },[])

    // console.log(getPerson)

    useEffect(() => {
        if(getPerson !== "") {
            axios.get(`https://swapi.py4e.com/api/people/${Number(getPerson) + 1}`)
            .then(res => {
                setYearNasc(res.data.birth_year)
            }) 
            .catch(err => {
                console.log(err)
            })  
        }
    }, [getPerson])
    
  return (
   <>
        <h2>Segundo Exercicio - Lista personagens</h2>

        <select onChange={personSelect}>
            <option value=''>Nenhuma</option>
        {
            person.map((persons, index) => {
                return (
                    <option value={index} key={index}>{persons.name}</option>
                )
            })
        }
            
        </select>

        <h3>{yearNasci}</h3>
   </>
  );
}

export default Exercicio2;
