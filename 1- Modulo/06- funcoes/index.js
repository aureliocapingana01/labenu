
//  -------Interpretação de código ------

//  1a R: vai ser impresso no console 10 e 50

//  1b R: Tirando os dois console da erro de codigo


// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))








// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function(texto) {
// 	return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)



// 2aR: Depois de pedir ao usuario um texto, a funcao vai tranformar ele em 


// minusculo depois vai ver se for verdadeiro ou falso se há a palavra cenoura no texto do usuario e vai dar a resposte no console 






// 2b CENOURA é bom pra vista










// --------- Escrita de código --------

// 1R:

// function imprimaMensagem(){
    
//     const nome = "Aurélio"
//     const idade = 30
//     const cidade = "Caxias do Sul"
//     const estudante = "Estudante na Labenu"

//     console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${estudante}.`)
// }

// imprimaMensagem()





// 2R:
// function pessoa (nome, idade, cidade, profisao){

//     const nome = "Aurélio"
//     const idade = 30
//     const cidade = "Caxias do Sul"
//     const profisao = "Programdor"

//     console.log(pessoa(`Eu sou ${nome} tenho ${idade}, resido em ${cidade}, a minha profisao é ${profisao}`))
// }

// pessoa(nome, idade)






// 2R:

// function funcao(numero1, numero2){

//     const soma = numero1 + numero2
    
//     return soma
// }

// const doisNumeros = funcao(5, 8)

// console.log(doisNumeros)



// function receber(numero1, numero2)



// 3R:

function somar (numero1, numero2){

    return numero1 + numero2
}

function subtrair (numero1, numero2){

    return numero1 - numero2
}

function multiplicar (numero1, numero2){

    return numero1 * numero2
}

function dividir (numero1, numero2){

    return numero1 / numero2
}

const usuarioPrimeiro = Number(prompt("Digite o primeiro numero "))

const usuarioSegundo = Number(prompt("Digite o segundo numero" ))


console.log(
    somar(usuarioPrimeiro, usuarioSegundo),

    subtrair(usuarioPrimeiro, usuarioSegundo)
,
    multiplicar(usuarioPrimeiro, usuarioSegundo),

    dividir(usuarioPrimeiro, usuarioSegundo),
)