// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return (array.length)
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return (array.reverse(array))
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
   array.sort((a , b) => a - b)
   return array
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  return array.filter((numero) => numero % 2 ==0)
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
   return array.filter((numero) => numero % 2 ==0).map((numeroPar) => numeroPar **2 )
 
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
   return Math.max.apply(null, array)
 }

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {


    
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
   

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   return pessoa.toUpperCase(pessoa.nome= "ANÔNIMO")
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   return pessoas.filter((pessoa) =>  pessoa.altura > 1.5 && pessoa.idade > 14 && pessoa.idade < 60)
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
   
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}