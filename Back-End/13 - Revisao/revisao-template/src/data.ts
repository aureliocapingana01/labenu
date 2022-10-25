import { character, GENDER, movie } from "./type";


// Array dos filmes:
export const movies: movie[] = [
    {
        id: 1,
        title: "X-men: O Filme",
        year: 2000
    },
    {
        id: 2,
        title: "Deadpool",
        year: 2016
    },
    {
        id: 3,
        title: "Mãos Talentosa",
        year: 1999
    }
]


// Array dos personagens:

export const characters: character[] = [
    {
        id: 1,
        name: "Storm",
        gender: GENDER.FEMALE
    },
    {
        id: 2,
        name: "Deadpool",
        gender: GENDER.OTHER,
        description: "Sexy motherf***"
    },
    {
        id: 3,
        name: "Colossus",
        gender: GENDER.MALE
    }
]