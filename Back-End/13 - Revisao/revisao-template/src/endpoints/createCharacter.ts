import { Request, Response } from "express";
import connection from "../connection";
import { characters } from "../data";

export default async function createCharacter(
    req: Request,
    res: Response
): Promise<void> { // void porque não tera um retorno de funcao

    try {
        //criar e add novo personagem 
        const { name, gender, description } = req.body

        // characters.push({
        //     id:Date.now(),
        //     name,
        //     gender,
        //     description
        // })

        await connection("character")
            .insert({ name, gender, description })

        res.status(201).end()
        // o metodo put não retorna uma resposta

    } catch (error: any) {
        res.status(500).end()
    }
}