export enum CATEGORIAS {
    ACESSORIOS = "acessórios",
    CALCADOS = "calçados",
    ROUPAS = "roupas"
}

export type Produto = {
    id: number,
    nome: string,
    preco: number,
    categoria: CATEGORIAS
}