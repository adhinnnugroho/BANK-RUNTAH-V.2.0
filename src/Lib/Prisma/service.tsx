import prisma from "../../../prisma/client";


export async function addData(collectionsName: any, userData: any, callback: Function) {
    await prisma.account.create({
        data: {
            email: userData.email,
            name: userData.name,
        }
    });
}