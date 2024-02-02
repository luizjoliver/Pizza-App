"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CartIcon from "./CartIcon";

const links = [
    {id:1,title:"Home",url:"/"},
    {id:2 ,title: "Menu" , url:"/menu"},
    {id:3,title:"Working Hours",url:"/"},
    {id:4,title:"Contact",url:"/"}
]


export default function Menu() {
    const [openMenu,setOpenMenu] = useState(false)

//Temporary
const user = false

  return (
    <div>
       { openMenu ? (<Image src="/close.png" alt="open menu img" width={20} height={20} quality={70}
       onClick={() => setOpenMenu(false)}/>)
       : (
        <Image src="/open.png" alt="close menu img" width={20} height={20} quality={70} onClick={() => setOpenMenu(true)}/>
       )
       }

        {openMenu && (<div className="bg-red-500 text-white absolute left-0 top-24 flex gap-8 flex-col items-center justify-center h-[calc(100vh-6rem)] w-full">
            
            {links.map((item) =>(
                <Link key={item.id} href={item.url}>{item.title}</Link>
            ))}

            {
               user ? (<Link href="/orders">Orders</Link>)
                :    ( <Link href="/login">Login</Link>)
            }
           
                <CartIcon/>
            
        </div>)}
    </div>
  )
}
