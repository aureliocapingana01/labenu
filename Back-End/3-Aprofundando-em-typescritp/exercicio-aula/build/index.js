"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* Union Type*/
let nome;
nome = "Aurélio";
nome = 30;
const functionary = {
    name: "Aurélio",
    age: 30,
    profission: "Analista de dados"
};
const user1 = {
    name: "Aurélio",
    birthDate: "10/09"
};
const user2 = {
    name: "Capingana",
    birthDate: undefined
};
const client = {
    name: "Aurélio",
    age: 30,
    userBank: "Banco do Brasil",
    password: 12345
};
console.table(client);
/* Enum  */
var BankClient;
(function (BankClient) {
    BankClient[BankClient["AURELIO"] = 12345] = "AURELIO";
    BankClient[BankClient["CASTRO"] = 23456] = "CASTRO";
    BankClient[BankClient["SECEU"] = 34567] = "SECEU";
    BankClient[BankClient["ANA"] = 45678] = "ANA";
    BankClient[BankClient["AFONSO"] = 56789] = "AFONSO";
})(BankClient || (BankClient = {}));
const manager = {
    name: "Capingana",
    client: BankClient.AURELIO
};
console.log(manager);
