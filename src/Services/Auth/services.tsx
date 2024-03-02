import { addData } from "@/Lib/Prisma/service";
import prisma from "@/Lib/Prisma/Client";


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
        updated_at?: Date,
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
        data.created_at = new Date();
        data.updated_at = new Date();

        data.password = '';
        
        await addData('account', data, (data: any) => {
            callback(data);
        })
    }
}