export enum USER_ROLE {
    NORMAL = "NORMAL", 
    ADMIN = "ADMIN"

}

export type User = {
    id: number, 
    name: string, 
    email: string, 
    type: USER_ROLE, 
    age: number
}


export let users :User[] = [
    {
        id: 1,
        name: "Aurélio",
        email: "aurelio@email.com",
        type: USER_ROLE.ADMIN,
        age: 22,
    },
    {
        id: 2,
        name: "Ana",
        email: "Ana@email.com",
        type: USER_ROLE.NORMAL,
        age: 16,
    },
    {
        id: 3,
        name: "Castro",
        email: "castro@email.com",
        type: USER_ROLE.ADMIN,
        age: 41,
    },
    {
        id: 4,
        name: "Israel",
        email: "israel@email.com",
        type: USER_ROLE.NORMAL,
        age: 30,
    },
    {
        id: 5,
        name: "Zeferina",
        email: "zeferina@email.com",
        type: USER_ROLE.ADMIN,
        age: 37,
    },
    {
        id: 6,
        name: "Manasse",
        email: "manasse@email.com",
        type: USER_ROLE.NORMAL,
        age: 33,
    },
]
