const Aurelio = {
    id : 1,
    name : 'Aurelio',
    age : 30,
    profession : 'Dev'
}
const Ana = {
    id : 2,
    name : 'Ana',
    age : 17
}

const personsAge = (user) => {
    if(!user) {
        return 'Erro, não é um usúario'
    }


    // Uso do ternário

    // return user.age > 18 ? `Parabéns, vc pode conduzir ${user.name}` : `Lamento, és menor de idade ${user.name}`



    // Uso do curto Circuito, usando o ||
        return user.profession || `Não tem profissão`



    // Uso do curto Circuito, usando o && 
        // return user.profession || `Não tem profissão`
}

console.log(personsAge(Aurelio))
console.log(personsAge(Ana))
// console.log(personsAge())