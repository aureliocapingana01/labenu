/* Exercicio 1

Crie um sistema de cadastro de usuário que contenha:

1- Tipo Aliases para uma pessoa(Person) com as propriedades id, name, email, passoword e role.

2- Tipos Aliases da conta: AdminAccount e NormalAccount; com as  propriedades account e permission

*/

import { type } from "os"

//1
type Person = {
    id: string | number,
    name: string,
    email: string,
    password: string | number,
    role: Role
}

//2
type AdminAccount = {
    account: string,
    permission: boolean
}
type NormalAccount = {
    account: string,
    permission: boolean
}

/* exercicio 2

Continuar nosso sistema de cadastro de usuario criando:

1- Enum com valolres DMIN e NORMAL
2- Tipo Intersection unindo: pessoa(Person) + permissão(Role)
3- Um array de usuários que permikte apenas guardar usuários do tipo Person + Role
4- Crie duas pessoas, uma com permissão normal e a outra admin
5- Guarde essas pessoas no array de usuário
*/

//1
enum Role {
    ADMIN = "Admin",
    NORMAL = "Normal"
}
//2
type AdminUser = Person & AdminAccount
type NormalUser = Person & NormalAccount

//3
type Users = AdminUser[] & NormalUser[]

//4
const user1: AdminUser = {
    id: 1,
    name: "Aurélio",
    email: "aurelio@g.com",
    password: "123456",
    role: Role.ADMIN,
    account: "account admin",
    permission: true
}

const user2: NormalUser = {
    id: 2,
    name: "Capingana",
    email: "capingana@g.com",
    password: "23456",
    role: Role.NORMAL,
    account: "account norfmal",
    permission: false
}

//5
const arrayUsers: Users = [user1 , user2]

console.log(arrayUsers)