import { getDiffieHellman } from "crypto"

export class Product {
    private id: string
    private name: string
    private price: number
    private image_url: string

    constructor(id: string, name: string, price: number, image_url: string)
    {
        this.id = id, 
        this.name = name,
        this.price = price, 
        this.image_url = image_url
    }

    getId(): string{
        return this.id
    }

    getName():string{
        return this.name
    }

    getPrice():number{
        return this.price
    }

    getUrl(): string{
        return this.image_url
    }

    setName(newName:string):void {
        this.name = newName
    }

    setPrice(newPrice:number):void {
        this.price = newPrice
    }
}

// Classe Não verbosa 

class User {
    constructor(
        private id: string, 
        private name: string, 
        private email: string, 
        private password: string
    ){}

    public getId(): string{
        return this.id
    }

    getName():string{
        return this.name
    }

}


