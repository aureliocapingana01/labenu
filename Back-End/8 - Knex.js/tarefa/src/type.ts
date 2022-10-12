import { type } from "os";

export enum CARTAO {
    BRONZE = 'bronze',
    PRATA = 'prata',
    OURO = 'ouro'
}

export type cliente = {
    id: number,
    nome: string,
    email: string,
    profissao: string,
    cartao: CARTAO
}