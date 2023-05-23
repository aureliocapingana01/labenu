// While

/*
let number 
let soma = 0

while(number != 0) {
    number = Number(prompt('Digite um numero: '))
    soma += number
}
console.log(soma)
*/



// For

/* Escreva uma função que receba um array com números e
devolva qual o maior dentro dele
*/
/*
const array = [5, 8, 29, 21, 7,99, 9]
let maior = 0

const maiorNumero = (array) => {
    for(let i = 0; i < array.length; i++) {
        if(array[i] > maior){
            maior = array[i]
        }
    }
    return maior
}

console.log(resultado = maiorNumero(array))
*/




// For of
/*
const arrayDeNumeros = [11, 15, 18, 14, 12, 13]
let maior = 0

for (let num of arrayDeNumeros) {
    if(num > maior) {
        maior = num
    }
}
console.log(maior)
*/






/*
● Considere que você tem um array com várias palavras.
Nossa tarefa é criar uma função para imprimi-las em uma
só mensagem colocando um espaço entre elas.
● Ex: Para este array ["Oi", "sumido", "tudo", "bem?",
"Saudades"], dar a mensagem "Oi sumido tudo bem?
Saudades"
 */

const arrayDePalvras = ['Um', 'Dia', 'Eu', 'Ganho', 'Uma', 'Bolada', 'Na', 'Vida']
let mensagem = ''

const formaFrase = (arr) => {

    // Usando o for of
    /*for (const palavra of arr) {
        mensagem += palavra + ' '
    }
    */

    // Usando o for
    for (let i = 0; i < arr.length; i++) {
        mensagem += arr[i] + ' '
    }

    return mensagem
}

console.log(frase = formaFrase(arrayDePalvras))