import Image from "next/image"
import { typeProductsData } from "../../../../types"
import Price from "@/components/Price"
import DeleteButton from "@/components/DeleteButton"


type paramsProductPage ={
  params:{
    id:string
  }
}

const getData = async (productId:string) =>{
   const res = await fetch(`http://localhost:3000/api/products/${productId}`,{
    cache:"no-store"
   })

   if(!res.ok){
    throw new Error("Request failed")
   }

   const data = await res.json()

return data
}

export default async function ProductPage({params:{id}} : paramsProductPage) {

  const singleProduct:typeProductsData = await getData(id)

  

  return (
    <div className="p-4 lg:px-20 xl:px-40 h-[90vh] flex flex-col justify-around text-red-500
    md:flex-row md:items-center md:gap-8 relative">

      {singleProduct.img && (
        <div className="relative w-full h-1/2 md:h-[70%]">
          <Image
            src={singleProduct.img}
            alt=""
            className="object-contain"
            fill
          />
        </div>
      )}

      <div className="h-1/2 flex flex-col gap-4 md:h-[70%] md:justify-center">

        <h1 className="text-3xl font-bold uppercase">{singleProduct.title}</h1>
        <p>{singleProduct.description}</p>
        <Price product={singleProduct}/> 

      </div>

      <DeleteButton id={singleProduct.id}/>
    </div>
  )
}
