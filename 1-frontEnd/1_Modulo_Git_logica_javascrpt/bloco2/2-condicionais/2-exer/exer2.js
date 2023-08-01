/*
Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!".  switch case
 */
const input = require('readline-sync')
const turno = input.question('Qual turno voce estuda: \n M - (matutino) \n V - (Vespertino) \n N - (Noturno)').toUpperCase()

switch (turno) {
    case 'M':
        console.log('Bom Dia...')
        break;
    case 'V':
        console.log('Boa Tarde...')
        break;
    case 'N':
        console.log('Boa Noite...')
        break;
    default:
        console.log('Até Amanha')
        break;
}