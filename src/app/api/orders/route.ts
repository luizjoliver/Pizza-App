import { getAuthSession } from "@/utils/auth";
import { prismaClient } from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request:NextRequest){

    const session = await getAuthSession()

    if(session){
    try {
        if(session.user.isAdmin){
            const orders = await prismaClient.order.findMany()
            return new NextResponse(JSON.stringify(orders),{status:200})
        }
         
        const orders = await prismaClient.order.findMany({
            where:{
                userEmail: session.user.email!
            }
        })

       return new NextResponse(JSON.stringify(orders),{status:200})
    } catch (error) {
       
        

    }
}else{
    return new NextResponse(JSON.stringify({message:"you are not authenticated"}),
    {status:401})
}
}

export async function POST(request:NextRequest){
    const session = await getAuthSession()

    if(session){
    try {

        const body = await request.json()
        if(session.user){
            const order = await prismaClient.order.create({
                data:body
            })
            return new NextResponse(JSON.stringify(order),{status:201})
        }
    } catch (error) {
       
        

    }
}else{
    return new NextResponse(JSON.stringify({message:"you are not authenticated"}),
    {status:401})
}


}