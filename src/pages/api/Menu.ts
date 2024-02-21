
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma/client";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        try {
            const list = await prisma.list_menu.findMany();
            res.status(200).json({ list });
        } catch (e) {
            res.status(500).json(e);
        }
    }
}