export enum CATEGORIAS {
   ACESSORIOS = 'acessorios',
   CALÇADOS = 'calçados',
   ROUPAS = 'roupas' 
}

export type Produto = {
    id: number,
    nome: string,
    preco: number,
    categoria: CATEGORIAS
}