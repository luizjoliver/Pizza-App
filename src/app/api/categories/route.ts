import { prismaClient } from "@/utils/db";

import { NextRequest, NextResponse } from "next/server";



export async function GET(request:NextRequest){

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