export type movie = {
    id: string | number,
    title: string,
    year: number
}

export enum GENDER {
    MALE = "MALE",
    FEMALE = "FEMALE",
    OTHER = "OTHER"
}

export type character = {
    id: string | number,
    name: string,
    gender: GENDER,
    description?: string // ? opcional
}