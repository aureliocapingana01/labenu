// Callback 


const verificarPar = (numero, msg) => {
    if (numero % 2 === 0) {
        let res = numero / 2
        msg(res)
    }
}

const msg = (msg) => {
    console.log('A opereação é: ', msg)
}

verificarPar(2, msg)


/*
const verificarPar = (numero, msg) => {
    if (numero % 2 === 0) {
        const res = numero / 2
        msg(res)
    }
}

verificarPar(4, (msg) => {
    console.log(' o resultaod é: ', msg)
})
*/