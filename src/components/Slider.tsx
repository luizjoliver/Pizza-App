"use client"

import Image from "next/image";
import { useEffect, useState } from "react";

const data = [
    {id:1 , title:"always fresh & always crispy & always hot",img:"/slide1.png"},
    {id:2 , title:"we delivery your order wherever you are in NY",img:"/slide2.png"},
    {id:3 , title:"the best pizza to share with your family",img:"/slide3.jpg"}
]

export default function Slider() {
    const [currentSlide,setCurrentSlide] = useState(0)

    // useEffect(() =>{
    //     const interval = setInterval(() =>{
    //         setCurrentSlide((prev) => prev === data.length - 1 ? 0 : prev + 1)
    //     },1000 * 3)
    //     return () => clearInterval(interval)
    // },[])


  return (
    <section className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-8.5rem)] lg:flex-row bg-fuchsia-50">
        {/*Text container */}
        <div className="flex-1 flex items-center justify-center flex-col gap-8 md:p-10 text-red-500 font-bold
        ">
            <h1 className="text-4xl text-center uppercase p-4  md:text-5xl xl:text-6xl">{data[currentSlide].title}</h1>
            <button className="bg-red-500 text-white py-4 px-8">Order now</button>
        </div>

        {/*Image container */}
        <div className="w-full flex-1 relative">
            <Image src={data[currentSlide].img} alt="" fill className="object-cover"/>
        </div>


    </section>
  )
}
