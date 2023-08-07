// Callback 

let res 

const verificarPar = (numero, msg) => {
    if (numero % 2 === 0) {
        res = numero / 2
    }
    else {
        res = 'o numero não é par'
    }
    msg(res)
}

const msg = (msg) => {
    console.log('O resultado desta opereação é: ', msg)
}

verificarPar(22, msg)



// Callback verificar se o numero é impar

/*
const oddNumber = (number) => {
    if (number % 2 !== 0) {
       message() 
    }
    else {
        messager()
    }
}

const message = () =>{
    console.log(" beleza o numero é impar ")
}
const messager = () =>{
    console.log("lamento o numero é par ")
}


oddNumber(21) 

*/