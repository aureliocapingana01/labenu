

function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
  
  let numeros = arrayDeNumeros.filter(x => x === numeroEscolhido).length
  
  if(numeros !== 0){
    let n =  "O número" + numeroEscolhido + "aparece" + numeros + "x"
    return n
  }
  // else if {
    //   return  "Número não encontrado"
    // }
  }
  const arrayDeNumeros = (1,4,8,2,5,4,2,4,7,5)
  console.log(n)