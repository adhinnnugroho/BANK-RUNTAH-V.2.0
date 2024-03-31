import prisma from "@/Core/Lib/Prisma/Client";


export async function addData(collectionsName: any, userData: any, callback: Function) {
    await prisma[collectionsName].create({
        data: userData
    })
}

export async function retriveDataByColumn(collectionsName: any, column: any, value: any) {
    return await prisma[collectionsName].findMany({
        where: {
            [column]: value
        }
    })
}