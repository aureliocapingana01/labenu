import knex from "knex";
import { Product } from "../class";
// import { connection } from "./connection";
import dotenv from "dotenv";

dotenv.config();

export class ProductDataBase {
    private connection = knex({
        client: "mysql",
        connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME
      }
    });

    public insertProduct = async (prod: Product) => {
        await this.connection('aulaClassesProduct')
        .insert({
            id: prod.getId(), 
            name: prod.getName(), 
            price: prod.getPrice(), 
            image_url: prod.getUrl()
        })

        // ou .insert(prod)
    }

    public getProducts = async () => {
        const result = await this.connection('aulaClassesProduct')
        .select('*')

        return result
    }


}





