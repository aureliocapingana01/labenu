const n1: number = 3
const n2: number = 4

function sum(n1: number, n2: number): number {
  return n1 + n2
}

const sayHello = (name?: string): void => {
  console.log("Hello", name || "world")
}

function method(condition: boolean, callback: () => void): void {
  if (condition) {
    callback()
  }
}

function buscarCarroPorNome(frota: string[], marca?: string) {
  if (marca === undefined) {
    return frota
  }

  return frota.filter((carro) => {
    return carro === marca
  })
}

const frota = ["Ford", "Toyota", "Fiat", "Sabaru", "Chevrolet"]
console.log(buscarCarroPorNome(frota, "Toyota"))

console.log(sum(n1, n2))
sayHello()
