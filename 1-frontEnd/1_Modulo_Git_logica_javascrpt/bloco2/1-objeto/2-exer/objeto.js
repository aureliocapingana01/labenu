/*
2. Resolva os passos a seguir: 
    
    a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 
    b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:
    
    1. O valor de `nome`
    2. O numero de caracteres do valor `nome`
    3. O valor de `idade`
    4. O valor de `profissão`
    5. O numero de caracteres do valor `profissão`

 */

    const firstInformation = {
        name: 'Aurélio',
        age: 30,
        profissao: 'Dev'

    }
    const secondInformation = {
        name: 'Capingana',
        age: 31,
        profissao: 'Empresário'
    }

    const mySelf = (firstInformation, secondInformation) => {
        let first = [
            firstInformation.name,
            firstInformation.name.length,
            firstInformation.age,
            firstInformation.profissao
        ]
        let second = [
            secondInformation.name,
            secondInformation.name.length,
            secondInformation.age,
            secondInformation.profissao 
        ]

        let im = {
            first,
            second
        }

        return im       
    }
    
    console.log(I = mySelf(firstInformation, secondInformation))
    // console.log(I = mySelf(secondInformation))