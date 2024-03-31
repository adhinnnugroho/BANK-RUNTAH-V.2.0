
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/Core/Lib/Prisma/Client";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            const list_menu = await prisma.list_menu.findMany();
            res.status(200).json({
                status: true,
                statusCode: 200,
                message: "success",
                data: list_menu
            })
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).json({ message: `Method ${req.method} Not Allowed` });
    }
}