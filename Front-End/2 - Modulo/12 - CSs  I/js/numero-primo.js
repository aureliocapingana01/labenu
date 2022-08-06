function calculaPrecoTotal(quantidade) {
    let umaDuzia = 1.00
    let meiaDuzia = 1.30
    let custo = 0
    
    if (quantidade >= 12){
        custo = quantidade * umaDuzia
    }
    else{
        custo = quantidade *meiaDuzia
    }
    return custo.toFixed(2) 
}

const usuario = Number(prompt("Quantas maças?"))
console.log(calculaPrecoTotal(usuario))
  



/*
function calculaPrecoTotal(quantidade) {
    // Escreva seu código aqui
      let umaDuzia = 1.00
      let meiaDuzia = 1.30
      let custo = 0
      
      if (quantidade >= 12){
          custo = quantidade * umaDuzia
      }
      else{
          custo = quantidade *meiaDuzia
      }
      return Number(custo.toFixed(1)) 
  }
  calculaPrecoTotal(2)

  */