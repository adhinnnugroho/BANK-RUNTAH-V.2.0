import { addData } from "@/Lib/Prisma/service";
import prisma from "../../../prisma/client";

export async function SignIn(email: string){
    const data = await await prisma.account.findMany({
        where: {
            email: email
        },
    })

    if (data) {
        return data[0];
    }else{
        return null;
    }
}

export async function LoginWithGoogle(
    data: {
        email: string, 
        role?: string,
        created_at?: Date,
        update_at?: Date,
        password?: string
    }, 
    callback: Function
){
    const user = await await prisma.account.findMany({
        where: {email: data.email},
    })

    if (user.length > 0) {
        callback(user[0]);
    }else{
        data.role = 'member';
        data.created_at = new Date();
        data.update_at = new Date();
        data.password = '';
        await prisma.account.create({
            data: {
                'username': 'adhis',
                'email': data.email,
                'password': data.password,
            }
        })
    }
}