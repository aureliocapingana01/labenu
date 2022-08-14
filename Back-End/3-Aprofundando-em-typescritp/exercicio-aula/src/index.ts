import { type, userInfo } from "os"

/* Union Type*/
let nome: string | number
nome = "Aurélio"
nome = 30

/* Type Aliases */
type Pessoa = {
    nome : string,
    age: number,
    profission: boolean | string
}

const funcionario: Pessoa = {
    nome: "Aurélio",
    age: 30,
    profission: "Analista de dados" 
}

/*Type + Union*/
type BirthDate = number | string | undefined

type Usuário = {
    nome: string,
    birthDate: BirthDate
}

const user1: Usuário = {
    nome: "Aurélio",
    birthDate: "10/09"
}
const user2: Usuário = {
    nome: "Capingana",
    birthDate: undefined
}

/* Intersection type */
type User = {
    name: string,
    age: number
}

type Account = {
    userBank: string,
    password: number | string
}

type userInfo = User & Account

const client : userInfo = {
    name: "Aurélio",
    age: 30,
    userBank: "Banco do Brasil",
    password: "Angola"
}

console.log(client)


/* Enum  */
enum BancoClientes {
    AURELIO = 12345,
    CASTRO = 23456,
    SECEU = 34567,
    ANA = 45678,
    AFONSO = 56789
}

type Banco = {
    nome: string,
    cliente: BancoClientes
}

const gerente: Banco = {
    nome: "Capingana",
    cliente: BancoClientes.AURELIO
}

console.log(gerente)