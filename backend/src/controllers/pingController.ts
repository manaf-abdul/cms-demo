import { Request, Response } from "express"

export const ping = async (req: Request, res: Response) => {
    const message = "Welcom to nearby vendors heyyyy"
    res.status(200).json(message)
}