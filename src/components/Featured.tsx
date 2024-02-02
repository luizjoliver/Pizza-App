import Image from "next/image";
import { typeFeaturedProducts } from "../../types";
import { featuredProducts } from "@/data";


const getData = async () => {
  const res = await fetch("http://localhost:3000/api/products",{
    cache:"no-cache"
  })
  
  if(!res.ok){
    throw new Error("Request products error")
  }

  const data = res.json()
   
  return data
}


export default async function Featured() {

 const featuredProducts:typeFeaturedProducts[] = await getData()
  
  return (
    <section className="w-[100%] overflow-x-auto text-red-400">
        {/* Wrapper*/}
        <div className="w-max flex">
            {/* Single item*/}
            {featuredProducts.map((item) =>(
                <div className="w-screen h-[60vh] flex flex-col items-center justify-around p-4
                hover:bg-fuchsia-50 transition-all md:w-[50vw] xl:w-[33vw] xl:h-[90vh]" key={item.id}>
                
               {item.img &&(
                 <div className="relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500">
                    <Image src={item.img} alt="" fill className="object-contain  "/>
                </div>
               )}
               
                <div className="flex-1 flex flex-col items-center justify-center text-center gap-4">
                    <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl mt-2">{item.title}</h1>
                    <p className="p-4 2xl:p-8">{item.desc}</p>
                    <span className="text-xl font-bold">{item.price}</span>
                    <button className="bg-red-500 text-white rounded-md p-2">Add to cart</button>
                </div>
            </div>

            ))}
        </div>
    </section>
  )
}
