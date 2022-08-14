"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* Union Type*/
let nome;
nome = "Aurélio";
nome = 30;
const funcionario = {
    nome: "Aurélio",
    age: 30,
    profission: "Analista de dados"
};
const user1 = {
    nome: "Aurélio",
    birthDate: "10/09"
};
const user2 = {
    nome: "Capingana",
    birthDate: undefined
};
const client = {
    name: "Aurélio",
    age: 30,
    userBank: "Banco do Brasil",
    password: "Angola"
};
console.log(client);
/* Enum  */
var BancoClientes;
(function (BancoClientes) {
    BancoClientes[BancoClientes["AURELIO"] = 12345] = "AURELIO";
    BancoClientes[BancoClientes["CASTRO"] = 23456] = "CASTRO";
    BancoClientes[BancoClientes["SECEU"] = 34567] = "SECEU";
    BancoClientes[BancoClientes["ANA"] = 45678] = "ANA";
    BancoClientes[BancoClientes["AFONSO"] = 56789] = "AFONSO";
})(BancoClientes || (BancoClientes = {}));
const gerente = {
    nome: "Capingana",
    cliente: BancoClientes.AURELIO
};
console.log(gerente);
