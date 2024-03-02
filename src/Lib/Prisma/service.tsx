import prisma from "@/Lib/Prisma/Client";


export async function addData(collectionsName: any, userData: any, callback: Function) {
    await prisma[collectionsName].create({
        data: userData
    })
}