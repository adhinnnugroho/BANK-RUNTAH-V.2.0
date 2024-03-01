import prisma from "../../../prisma/client";


export async function addData(collectionsName: any, userData: any, callback: Function) {
    await prisma[collectionsName].create({
        data: userData
    })
}