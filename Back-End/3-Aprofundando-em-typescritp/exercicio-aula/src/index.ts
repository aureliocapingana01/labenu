import { type, userInfo } from "os"

/* Union Type*/
let nome: string | number
nome = "Aurélio"
nome = 30

/* Type Aliases */
type Person = {
    name : string,
    age: number,
    profission: boolean | string
}

const functionary: Person = {
    name: "Aurélio",
    age: 30,
    profission: "Analista de dados" 
}

/*Type + Union*/
type BirthDate = number | string | undefined

type Use = {
    name: string,
    birthDate: BirthDate
}

const user1: Use = {
    name: "Aurélio",
    birthDate: "10/09"
}
const user2: Use = {
    name: "Capingana",
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
    password: 12345
}

console.table(client)


/* Enum  */
enum BankClient {
    AURELIO = 12345,
    CASTRO = 23456,
    SECEU = 34567,
    ANA = 45678,
    AFONSO = 56789
}


type Bank = {
    name: string,
    client: BankClient
}
const manager: Bank = {
    name: "Capingana",
    client: BankClient.AURELIO
}


console.log(manager)