/*
4. Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo `true` ou `false`:

    O primeiro numero é maior que segundo? true
    O primeiro numero é igual ao segundo? false
    O primeiro numero é divisível pelo segundo? true
    O segundo numero é divisível pelo primeiro? true

obs: O true ou false vai depender dos números inseridos e do resultado das operações.
*/

let numberOne = Number(prompt('Digite o primeiro numero: '))
let numberTwo = Number(prompt('Digite o segundo numero: '))

console.log('O primeiro numero é maior que segundo?', numberOne > numberTwo)
console.log(' O primeiro numero é igual ao segundo?', numberOne == numberTwo)
console.log('O primeiro numero é divisível pelo segundo?', numberOne % numberTwo == 0)
console.log('O segundo numero é divisível pelo primeiro?', numberTwo % numberOne == 0)
