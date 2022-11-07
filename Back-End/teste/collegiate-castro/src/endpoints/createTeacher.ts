import { Request, Response } from "express";
import connetction from "../connection";

export default async function createTeacher(
    req:Request,
    res:Response
): Promise<void> {

    try {
        const { name, dev, subject, description} = req.body

        await connetction

    } catch (error:any) {
        res.status(500).send
    }
}