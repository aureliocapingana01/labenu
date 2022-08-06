/*
const num = 500
console.log(num.toString())
*/




/* concatenar strings
let nome = "Aurélio"
let sobreNome ="Capingana"
let nomeCompleto = "Meu nome completo é : " + nome + sobreNome
*/


/*
let nome = "Aurélto"
let sobreNome ="Captngana"
const nomeCompleto = nome + sobreNome
const nome1 = nomeCompleto.replaceAll("t", "i")
const nome2 = nomeCompleto.toUpperCase()
const nome3 = nomeCompleto.indexOf("n")

console.log(nome1)
console.log(nome2)
console.log(nome3)

*/



/*const nome = ["Aurélio", "Chiwale", "Ekungungo","Capingana", "Cameia"]

// console.log(nome)

const nome1 = nome.pop()
// console.log(nome)
// console.log(nome1)

const nome2 = nome.push("Manguena", "Guegue")
console.log(nome)

if (nome1 === "Capingana"){
    console.log("Obrigado...")
}
else{
    alert("ERRO...")

    const nome3 = nome.splice(4,3) // para excluir elementos 

    console.log(nome3)
}
*/




/*
let aluno = ['Aurélio', 'Capingana', 30, 'Dev']

// console.log(`Nome do Aluno: ${aluno[0]} ${aluno[1]}`)
// console.log(` Idade: ${aluno[2]}, Curso: ${aluno[3]}`)


aluno.splice(1,0, "Chiwale") // para inserir elemento ou excrluir
console.log(aluno)



const excluir = aluno.shift() // para excluir o primeiro elemento do array



const alteraPosicao = aluno.splice(2,1, "Ekungungo") // para por um elemento em certa posição do array



for( i=0; i<aluno.length; i++){
    // console.log(`O item ${i}, é ${aluno[i]}`) // para iterando os elementos do array
}


aluno.forEach((elemento, indice) =>
 console.log(`O item ${indice} é ${elemento}`)) // Percorre os elementos do array e executa uma função callback


// console.log(aluno)
// console.log(excluir)
// console.log(aluno)
// console.log(alteraPosicao)

*/



/*
// ---------   Array.prototype  --------

// Essa propriedade permite a criação de propriedade com caracteristica de função




Array.prototype.retornaPares = function(){
    let numerosPares = []
    this.forEach(elemento =>{
        if( elemento %2 ===0)
        numerosPares.push(elemento)
    })
    return numerosPares
}
let numeros = [1,2,3,4,5,6,7,8,9,10]
let pares = numeros.retornaPares()
console.log(pares)




//Nesse exemplo, criamos uma prototype chamada retornaPares () para retornar os números pares em um novo array. Perceba que criamos um array vazio e utilizamos o método forEach () para fazer a leitura da variável e adicionar os elementos que atendem ao critério de seleção por meio do método push (). A seguir, retornamos o novo array apenas com o resultado desejado.

*/





// ------- Metodo.from

//  é utilizado quando queremos criar um array a partir de um objeto que não é um array. Um exemplo são as strings em que cada caractere é convertido para um elemento de array

let frase = "javaScript"
let novaFrase = Array.from(frase)
console.log(novaFrase)