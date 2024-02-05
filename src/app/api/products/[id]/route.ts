import { prismaClient } from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest,{params}:{params:{id:string}}){

    const {id} = params

    try {
        
      const product = await prismaClient.product.findUnique({
        where:{
            id:id  
        }
      })  

      return new NextResponse(JSON.stringify(product),{status:200})
    } catch (error) {
        return new NextResponse(JSON.stringify({message:"Single Product erorr fetching"}),{status:500})
    }


}