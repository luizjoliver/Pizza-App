import { prismaClient } from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

export async function PUT({params}:{params:{intentId:string}},req:NextRequest) {
    const {intentId} = params

    try {
        
        await prismaClient.order.update({
            where:{
                itent_id:intentId
            },
            data:{
                status:"Being prepared"
            }
        })
        return new NextResponse(JSON.stringify({message:"Order has been updated!"}),{
            status:200
        })
    } catch (error) {
        return new NextResponse(JSON.stringify({message:"Something went wrong"}),{
            status:500
        })
    }

}