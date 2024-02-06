import { getAuthSession } from "@/utils/auth";
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

export async function DELETE(req:NextRequest,{params}:{params:{id:string}}){

  const {id} = params
  const session = await getAuthSession()

  if(session?.user.isAdmin){
  try {
      
    const product = await prismaClient.product.delete({
      where:{
          id:id  
      }
    })  

    return new NextResponse(JSON.stringify("Product has been deleted"),{status:200})
  } catch (error) {
      return new NextResponse(JSON.stringify({message:"Something went wrong"}),{status:500})
  }

}
return new NextResponse(JSON.stringify({message:"You are not allowed"}),{status:403})
}