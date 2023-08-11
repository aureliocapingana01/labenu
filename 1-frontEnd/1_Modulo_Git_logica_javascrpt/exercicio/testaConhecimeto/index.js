const countries = [
    // {country:'Zâmbia',  capital:'Lusaka'},
    {country:'Uganda',  capital:'Kampala'},
    {country:'Portugal',capital:'Lisboa'},
    // {country:'Japão',  capital:'Tokyo'},
    {country:'Angola',  capital:'Luanda'},
    // {country:'EUA',  capital:'Washington'},
    {country:'China',  capital:'Pequim'},
]
const newArrCountry = countries.map((country) => {
    return country.country
})
// console.log(newArrCountry)

const newArrCapital = countries.map((country) => {
    return country.capital
})
// console.log(newArrCapital)

const filtarAngola = countries.filter((name) => {
    return name.country == 'Angola'
});
// console.log(filtarAngola)

const nameCountry = countries.map((name) => {
    return name.country
});
// console.log(country)

const ordeCountry = nameCountry.sort((a, b) => a.localeCompare(b));

console.log(ordeCountry);