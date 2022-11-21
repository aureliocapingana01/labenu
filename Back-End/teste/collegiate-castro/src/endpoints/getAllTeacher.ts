import connetction from "../connection";
import { Request, Response } from "express";
import { teacher } from "../type";

export default async function getAllTeacher (
    req: Request,
    res:Response
): Promise<void> {

    try {
        const name = req.query

        const teachers : teacher[] = await connetction("teacher")
        

        res.send(teachers)

    } catch (error) {
        res.status(500)
    }
}