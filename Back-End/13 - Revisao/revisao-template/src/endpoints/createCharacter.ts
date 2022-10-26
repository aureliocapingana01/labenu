import { Request, Response } from "express";
import { characters } from "../data";

export default function createCharacter(
    req:Request,
    res:Response
): void{ // void porque não tera um retorno de funcao
    
    //criar e add novo personagem 
    const {name, gender, description} = req.body

    characters.push({
        id:Date.now(),
        name,
        gender,
        description
    })
    res.status(201).end()
}// o metodo put não retorna uma resposta