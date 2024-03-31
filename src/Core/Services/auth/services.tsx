import { addData } from "@/Core/Lib/Prisma/service";
import prisma from "@/Core/Lib/Prisma/Client";
import { getSession } from "next-auth/react";
import bcrypt from 'bcrypt';

export async function SignIn(email: string) {
    const data = await await prisma.account.findMany({
        where: {
            email: email
        },
    })

    if (data) {
        return data[0];
    } else {
        return null;
    }
}

export async function LoginWithGoogle(data: any, callback: Function) {
    try {
        let checkUser = await prisma.account.findMany({
            where: { email: data.email },
        })

        if (checkUser.length > 0) {
            callback(checkUser[0]);
        }

        const newData = {
            ...data,
            created_at: new Date(),
            updated_at: new Date(),
            password:  await bcrypt.hash(data.username, 10),
        };

        await addData('account', newData, (addedData: any) => {
            callback(addedData);
        });

    } catch (error) {
        console.error("Error in LoginWithGoogle:", error);
        callback(null, error);
    }
}

export async function getServerSideProps(context: any) {
    const session = await getSession(context);

    if (!session) {
        return {
            redirect: {
                destination: '',
                permanent: false,
            },
        };
    }

    return {
        props: {
            session,
        },
    };
}
