import { prismaClient } from "@/utils/db"
import { NextRequest, NextResponse } from "next/server"


export async function PUT(req:NextRequest,{params}:{params:{id:string}}){

   const {id} = params

    try {

        const body = await req.json()
        
        await prismaClient.order.update({
            where:{
                id:id
            },
            data: {status:body}
        })
        return new NextResponse(JSON.stringify({message:"Order has been updated!"}),{status:200}) 

    } catch (error) {
       return new NextResponse(JSON.stringify({message:"Something went wrong!"}),{status:500}) 
    }

}