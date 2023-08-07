// Usando função de callback - map

/*
const countries = [
    {country: "Angola", continent: "Africa"},
    {country: "Brasil", continent: "América do Sul"},
    {country: "Japão", continent: "Asia"},
    {country: "EUA", continent: "América central"},
    {country: "Bergica", continent: "Europa"},
    {country: "Austrália", continent: "Oceania"},
]

const returnCountry = (elem, index) => {
   console.log(`O nome dos paises é: ${elem.country}, seu continente é ${index}`) 
}

const mapCountry = countries.map(returnCountry)

returnCountry()

*/

const arrNumber = [85, 2, 45, 7, 9, 23, 1]

arrNumber.map((number, index) => {
    console.log(`O número é: ${number}  sua posição é  ${index}`)
})

