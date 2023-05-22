/* 1. 
    b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (`string`), a idade (`number`), a cidade (`string`) e uma profissão (`string`). Ela deve retornar uma `string` que unifique todas as informações da pessoa em uma só mensagem com o template:
     */

    const eu = function(nome, idade, cidade, profissão) {
        let info = (`Eu ${nome}, tenho ${idade} anos de idade, vivo na cidade de ${cidade}, sou programador ${profissão}`)

        return info
    }
let info = eu('Aurélio', 30, 'Caxias do Sul', 'Dev' )

console.log(info)
