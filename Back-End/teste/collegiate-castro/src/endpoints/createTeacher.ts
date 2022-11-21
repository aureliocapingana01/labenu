import { Request, Response } from "express";
import connetction from "../connection";
import { teachers } from "../data";

export default async function createTeacher(
    req:Request,
    res:Response
): Promise<void> {

    try {
        const { name, dev, subject, description} = req.body

        await connetction("teacher")
        .insert({name, dev, subject, description})

        res.status(200).end()

    } catch (error:any) {
        res.status(500).send
    }
}