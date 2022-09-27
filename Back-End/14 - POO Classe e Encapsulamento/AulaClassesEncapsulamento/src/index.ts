import { Request, Response } from "express"
import { app } from "./app"
import { Product } from "./class"

import { ProductDataBase } from "./data/queries"

// Exemplos de criação de class e dinâmica public vs private
class User {
    constructor(
        public id: string,
        public nome: string,
        public email: string
    ){}

    getName() {
        return this.nome
    }
}

// const user1 = new User('1', 'Ph', 'ph@labenu.com')

// const user2 = new User('2', 'Wictor', 'wictor@labenu.com')

// console.log(user1.id, user1.nome, user2.nome)


// --------------------------------

// API utilizando instancias de classes


// // type Product = {
//     id: string,                   // type que agora virou classe
//     name: string,
//     price: string,
//     image_url: string
// // }


app.post('/product/create', async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const { name, price, image_url } = req.body
        const id = Math.random().toString()

        const newProduct = new Product(id, name, price, image_url) // instancia do produto
        const productDB = new ProductDataBase() // instancia da classe Database relacionada à produtos

        await productDB.insertProduct(newProduct)

        res.status(201).send('Produto Criado!')
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})

app.get('/products',  async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const productDB = new ProductDataBase()

        const result = await productDB.getProducts()

        res.status(200).send(result)
        
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})





