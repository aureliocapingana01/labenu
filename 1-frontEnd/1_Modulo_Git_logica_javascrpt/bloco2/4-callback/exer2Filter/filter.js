// Exemplo do uso do callback filter

/*
const countries = [
    {country: "Angola", continent: "Africa"},
    {country: "Brasil", continent: "América do Sul"},
    {country: "Japão", continent: "Asia"},
    {country: "EUA", continent: "América central"},
    {country: "Bergica", continent: "Europa"},
    {country: "Austrália", continent: "Oceania"},
    {country: "Niger", continent: "Africa"},
    {country: "Angentina", continent: "América do Sul"},
    {country: "China", continent: "Asia"},
    {country: "México", continent: "América central"},
    {country: "Suiça", continent: "Europa"},
    {country: "Nova Zelandi", continent: "Oceania"},
]
const countryFilter = (africano) => {
    return africano.country === "Angola"
}

const countryAfrica = countries.filter(countryFilter)

console.log(countryAfrica)
*/
  





















// Fazer uma função que filta todos os numeros maior que 10

const number = [4, 8, 20, 10, 1, 12, 45, 7, 11, 9]

const bigger = (value) => {
     return value > 10
}

const par = (valuePar) => {
    return valuePar % 2 === 0
}

const biggestTen = number.filter(bigger)
const numberPar = number.filter(par)

console.log(`Os numeros maiores que 10 do array são: ${biggestTen}`)
console.log(`Os numeros pares do array são: ${numberPar}`)
