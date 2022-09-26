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
        name: "Alice",
        email: "alice@email.com",
        type: USER_ROLE.ADMIN,
        age: 12,
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: USER_ROLE.ADMIN,
        age: 36,
    },
    {
        id: 3,
        name: "Roberto",
        email: "roberto@email.com",
        type: USER_ROLE.ADMIN,
        age: 21,
    },
    {
        id: 4,
        name: "Ronaldo",
        email: "ronaldo@email.com",
        type: USER_ROLE.NORMAL,
        age: 17,
    },
    {
        id: 5,
        name: "Marta",
        email: "marta@email.com",
        type: USER_ROLE.NORMAL,
        age: 17,
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: USER_ROLE.NORMAL,
        age: 60,
    },
]

