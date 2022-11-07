

// Type das classes
export type CLASS = {
    id: number,
    number: number,
    title: string
}

// Type dos professores
export type teacher = {
    id: number,
    name: string,
    dev: DEV,
    subject: SUBJECT,
    discription?: string
}

// Enum de disciplinas 
export enum SUBJECT {
    HTML = "HTML",
    JAVASCRIPT = "JAVASCRIPT",
    REACT = "REACT",
    TYPESCRIPT = "TYPESCRIPT",
    SQL = "SQL"
}

export enum DEV {
    FRONT_END = "FRONT END",
    BACK_END = "BACK END",
    FULL_STACK = "FULL STACK"
}