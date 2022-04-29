/*

verificarNumerosPrimos(15)

function verificarNumerosPrimos(ver){
    for (let numero = 2; numero <= ver; numero ++ ){
        if (numerosPrimos(numero))
        console.log(numero)
    }
}

function numerosPrimos(numero){
    for( let divisor = 2; divisor < numero; divisor++){
        if(numero % divisor ===0){
            return false
        }
        return true
    }
}

*/


// function checaNumeroPrimo(n) {
//     let divisores = 0
    
//     for (let i = 1; i <= n; i++)
//     if (n % i == 0) {
//     divisores++;
//     }
    
//     if (divisores == 2){
//     return 'É primo';
//     } else {
//     return 'Não é primo';
//     }
//     }

//     checaNumeroPrimo(15)



// function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
//     // Escreva seu código aqui
//     const salario = 2000
    
//     const salarioFinal = (qtdeCarrosVendidos * 100) + (valorTotalVendas * 0.05) + salario
    
//     return salarioFinal
   
//    }
   
//    const cal = calculaSalario(3, 50000)
//    console.log(cal)





function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
    // Escreva seu código aqui
    return salarioFinal = 2000 + (100 * qtdeCarrosVendidos + 0.05 * valorTotalVendas)
   
   }
   
   calculaSalario(3, 130000)

   console.log(salarioFinal)