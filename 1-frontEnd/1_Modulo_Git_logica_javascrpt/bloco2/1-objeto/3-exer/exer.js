/*
3. Resolva os passos a seguir: 
    a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`
    b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (`string`) e disponibilidade (`boolean` - devem começar como `true`)
    c) Crie uma função que **receba** um objeto fruta por **parâmetro** e coloque-a dentro do array de `carrinho`. Invoque essa função passando os três objetos criados.
 */

let carrinho = []

const fruta1 = { 
    nome: 'Banana',
    disponiblidade: true
}
const fruta2 = { 
    nome: 'Abacate',
    disponiblidade: true
}
const fruta3 = { 
    nome: 'Maçã',
    disponiblidade: true
}

const compra = (fruta1, fruta2, fruta3) => {
    carrinho = [fruta1.nome, fruta2.nome, fruta3.nome]
    return carrinho
}

console.log(compra(fruta1, fruta2, fruta3))