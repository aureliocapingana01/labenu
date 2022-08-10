const sayHello = (name?: string): void => {
    console.log("Hello", name || "Wordl")
}
(sayHello(`Aurélio`))

function method(condition: boolean, callback: () => void){
    if(condition) {
        callback()
    }
}

function buscarCarroPorNome(frota: string[], marca?: string){
    if(marca == undefined){
        return frota
    }
    return frota.filter((carro)=>{
        return carro === marca
    })
}

const frota = [
    "Ford", "Toyota", "Fiat", "Chervolet", "Susuk", "Kia"
]
console.log(buscarCarroPorNome(frota, "Kia"))