import { SignIn, LoginWithGoogle } from "@/Services/auth/services";
import { compare } from "bcrypt";
import GoogleProvider from "next-auth/providers/google";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider  from "next-auth/providers/credentials";
import prisma from "@/Lib/Prisma/Client";
import { retriveDataByColumn } from "@/Lib/Prisma/service";

const authOptions: NextAuthOptions = {
    session:{
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    providers:[
        CredentialsProvider({
            type: "credentials",
            name: "Credentials",
            credentials: {
                email: {label: "Email", type: "email"},
                password: {label: "Password", type: "password"}
            },
            async authorize(credentials){
                const {email, password} = credentials as {
                    email: string; 
                    password: string;
                }
                
                const user: any = await SignIn(email);
                if(user){
                    const confirmPasword = await compare(password, user.password);

                    if (confirmPasword) {
                        return user;
                    }

                    return null;
                }else{
                    return null
                }
            }


        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_OAUTH_CLIENT_ID || '',
            clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET || '',
        })
    ],
    callbacks: {
        async jwt({token, account, profile, user}: any) {
            if(account?.provider === "credentials"){
                token.email = user.email;
            }

            if(account?.provider === "google"){
                const data = {
                    name: user.name,
                    email: user.email,
                    username: generateRandomUsername(),
                    type: 'google'
                }


                await LoginWithGoogle(data, (data: any) => {
                        token.email = data.email,
                        token.name = data.fullname,
                        token.username  = data.username
                    }
                )
            }

            return token;
        },

        async session({session, token}: any) {
            if("email" in token){
                const DataUser = await retriveDataByColumn("account", "email", token.email);
                session.user = DataUser;
            }

            return session;
        }
    },
    pages: {
        signIn: "/auth/login"
    }

}

export default NextAuth(authOptions);

function generateRandomUsername() {
    return "user" + Math.floor(Math.random() * 10000);
}