import { retrieveData } from "@/Lib/Firebase/service";
import { NextApiRequest, NextApiResponse } from "next";

export default async function name(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        const menu = await retrieveData('menu-list');

        const data = menu.map((menu: any) => {
            return menu;
        })

        res.status(200).json({
            status: true,
            statusCode: 200,
            message: "success",
            data: data
        })
    }
}