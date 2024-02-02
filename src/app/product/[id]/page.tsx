import Price from "@/components/Price"
import { singleProduct } from "@/data"
import Image from "next/image"

type paramsProductPage ={
  params:{
    id:string
  }
}


export default function ProductPage({params:{id}} : paramsProductPage) {
  return (
    <div className="p-4 lg:px-20 xl:px-40 h-[90vh] flex flex-col justify-around text-red-500
    md:flex-row md:items-center md:gap-8">

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
        <p>{singleProduct.desc}</p>
        <Price id={singleProduct.id} price={singleProduct.price} options={singleProduct.options}/>
      </div>
      
    </div>
  )
}
