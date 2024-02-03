import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions, User, getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { prismaClient } from "./db";

declare module "next-auth"{
    interface Session{
        user:User & {
            isAdmin:boolean
        }
    }
}

declare module "next-auth/jwt"{
    interface JWT {
            isAdmin:boolean
        
    }
}

export const authOptions:NextAuthOptions = {
    adapter:PrismaAdapter(prismaClient),
    session:{
      strategy:"jwt"
    },
    providers:[
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
          })
    ],
    callbacks:{
        async session({token,session}){
            if(token){
                session.user.isAdmin = token.isAdmin
            } 

            return session
        },
        async jwt({token}){

            const userInDb = await prismaClient.user.findUnique({
                where:{
                    email:token.email!
                }
            })

            token.isAdmin = userInDb.isAdmin
            return token
        }
    }
}

export const getAuthSession = () => getServerSession(authOptions)