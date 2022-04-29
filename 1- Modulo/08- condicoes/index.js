//JavaScript
// const pessoa = {
// 	nome: "Paula",
// 	genero: "Feminino"
// 	}
	
	
// 	const desejaBoasVindas = (pessoa) => {

// 	if(pessoa.genero === "Feminino") {
// 	  return "Seja bem-vinda!"
// 	}
// 	else if(pessoa.genero === "Masculino"){
// 	 return "Seja bem-vindo!"
// 	} 
// 	else {
// 	 return "Desejamos boas-vindas!".
// 	}
// 	}
	
	
// 	console.log(desejaBoasVindas(pessoa))






//---------- interpretação de código --------------


//------- 11111111111111111111 ----------
	
/*const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}*/



// 1a R: o código pede um número no usuario e testa se número é divisivel por 2 e se tem com o resto da divisão  0







// 1b R: Para isso os números tenhem de ser divisivel por 2 e com o resto 0. Em suma tem de ser numeros pares 2, 4, 8 ....



// 1c R: Considerando a resposta da linha b, para não passar no teste teria de ser nmeros inpares 3, 5, 9 ....





//------------- 22222222222222222 ------------

/*let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)*/




// 2a R: o código faz a leitura da entrada inserida pelo usuario sobre a fruta pretendida, e imprime uma mensagem dizendo o nome da fruta e o seu respetivo valor que está no sistema do mercado 


// 2b R: se o valor de fruta for Maçã, no console será impresso: O preço da fruta Maçã é R$ 2.25


// 2c R: Se for retirado o break infelizmente o valor da Pêra não será lido no seu case, com isso vai ler o valor do default




//----------- 3333333333333 ---------------

/*const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)*/



// 3a R: A primeira linha vai analisar se o numero inserido pelo uusario é maior que 0



// 3b R: Se o usuario digitou 10, a mensagem do terminal será: Esse número passou no teste



// 3c R: Sim havera erro no console, porque a  variavel mensagem está declarada no bloco de codigo do IF








//-------------- escrita de código -----------------


//1

/*const idade = Number(prompt("Quai é a sua idade?"))

if ( idade >= 18) {
	console.log(`[PARABÈS] você tem ${idade} anos de idade, você pode dirigir`)
}
else{
	console.log(`[INFELIZMENTE] você tem ${idade} anos de idade, Você não pode dirigir`)
}*/



//2



/*const horario = prompt("Qual horário do dia você estuda, Digite: [M-manha, V-Tarde, N-noite]")

if (horario === "M"){
	console.log("Bom Dia...")
}
else if (horario === "V"){
	console.log("Boa Tarde...")
}
else{
	console.log("Boa Noite...")
}
*/



//3

/*const turno = prompt("Qual horário do dia você estuda, Digite: [M-manha, V-Tarde, N-noite]")

switch (turno) {
  case "M":
	console.log("Bom Dia...")
    break;

  case "V":
	console.log("Boa Tarde...")
    break;

  case "N":
	console.log("Boa Noite...")
    break;
 
  default:
	console.log("Estuda na Labenu")
    break;
}*/




//4

let amigo = prompt("Qual o seu nome?")
let generoDeFilme = prompt(`Qua seu genero de filme ${amigo}`)
let precoDoIngresso = Number(prompt(`Qual o preço do ingresso do filme ${generoDeFilme} ${amigo}`))

if (generoDeFilme === "fantasia" && precoDoIngresso < 15){

	console.log(`Bem Vindos ao cinema ${amigo} e amigo, o filme hoje é ${generoDeFilme}, Bom Filme!`)
}

else{
	console.log(`Bem Vindos ao cinema ${amigo} e amigo, Escolha outro Filme:`)
}

// O desafio é interessante, vou fazer no fim de semana, não foi a tempo hoje, Obrigado.