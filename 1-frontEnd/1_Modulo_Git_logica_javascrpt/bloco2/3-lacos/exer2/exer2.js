/*
2. Considere que você tenha acesso a um `array`  (chamado de 'array original') que é composto somente de números. Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:
   
  
    d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.
    e) Escreva um programa que imprima no console o maior e o menor números contidos no array original */

    // const array = [80, 30, 130, 40, 60, 21, 70, 105, 62, 162, 120, 90, 103, 110, 55]
    
    
//  a) Escreva um programa que **imprime** cada um dos valores do array original.
    // let valores 
    
    /* 
    const valoresDoArray = (array) => {
        for(let i = 0; i < array.length; i++) {
            valores = array + '\n'
            return valores
        }
    }
    console.log('Resultado a:' valores = valoresDoArray(array))
    */



//  b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10
/*
let numerosDivididos = ''

const divisaoDoArray = (array) => {
    for (let i = 0; i < array.length; i++ ) {
      numerosDivididos += array[i] / 10 + '\n'
    }
    return numerosDivididos  
}
console.log(res = divisaoDoArray(array))
*/



// c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original e **imprima** esse novo array

const arr = [5,9,44,8,7,11,12,54,99,63,2]

let arrPar = []
let arrImpar = []

for (let i = 0; i < arr.length; i++ ){
    if (arr[i] % 2 == 0) {
        arrPar = arr[i]

        console.log(arrPar)
    }
    // else {
    //     arrImpar = arr[i]

    //     console.log(`O numeros impares do array são ${arrImpar}`)
    // }
}
