/* 
Faça uma função que execute o teorema de Pitágoras, recebendo dois catetos e calculando o valor da hipotenusa. Retorne este valor, invoque a função e imprima o resultado no console.

A fórmula do teorema é: hip² = a² + b² , onde hip é a hipotenusa e a e b são os catetos. 
É necessário isolar a hipotenusa, então ao final temos: hip = √(a² + b²)
*/

const teoremaDePitagoras = (a, b) => {
    let hipotenusa = ((a * a) + (b * b)) 
    return hipotenusa
}

res = teoremaDePitagoras(4, 8)
console.log(res)