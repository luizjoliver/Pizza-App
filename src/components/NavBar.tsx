import Link from "next/link";
import Menu from "./Menu";
import CartIcon from "./CartIcon";
import Image from "next/image";
import UserLinks from "./UserLinks";


export default function NavBar() {


  return (
    <div className="h-12 text-red-500 flex  items-center justify-between p-4 border-b-2 border-red-400 uppercase md:h-[5.5rem] lg:px-10 xl:px-20">

        <div className="hidden md:flex gap-4 flex-1">
            <Link href="/">Homepage</Link>
            <Link href="/menu">Menu</Link> 
            <Link href="/">Contact</Link>  
        </div>


        <div className="text-xl md:font-bold flex-1 md:text-center">
            <Link href="/">Massimo</Link>
        </div>

        <div className="md:hidden">
            <Menu/>
        </div>

        <div className="hidden md:flex gap-4 items-center  justify-end flex-1">
            <div className="flex md:absolute lg:static top-3 right-2 items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-lg">
                <Image src="/phone.png" alt="phone icon img" width={10} height={10}/>
                <span className="text-sm">123 345 67</span>
            </div>
             <UserLinks/>
            <CartIcon/>
        </div>

    </div>
  )
}
