import { prismaClient } from "@/db";

import { NextResponse } from "next/server";



export async function GET(request:Request){

try {
    
    const categories = await prismaClient.category.findMany()

    return new NextResponse(
        JSON.stringify(categories)
        ,{
        status:200
    })

} catch (error) {
    return new NextResponse(
    JSON.stringify({message:"something went wrong!"}),
    {status:500})
}

}