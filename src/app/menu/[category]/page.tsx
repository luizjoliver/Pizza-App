import { pizzas } from "@/data";
import Image from "next/image";
import Link from "next/link";


export default function CategoryPage() {
  return (
    <section className="flex flex-wrap text-red-500">
      {pizzas.map(pizza =>(

        <Link href={`/product/${pizza.id}`} className="w-full sm:w-1/2 p-4 lg:w-1/3 h-[60vh] border-r-2 border-b-2 border-red-500 flex flex-col justify-between group hover:bg-fuchsia-50" key={pizza.id}>

          {pizza.img && (
          <div className="relative h-[80%]">
            <Image src={pizza.img} fill alt="" className="object-contain"/>
          </div>)}

          <div className="flex items-center justify-between ">
            <h1 className="text-xl p-2 uppercase">{pizza.title}</h1>
            <h2 className="group-hover:hidden text-xl">${pizza.price}</h2>
            <button className="hidden bg-red-500 group-hover:block p-2 rounded-lg text-white font-bold">Add to cart</button>
          </div>

        </Link>
      ))}
    </section>
  )
}
