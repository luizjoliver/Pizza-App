"use client"

import { useSession } from "next-auth/react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"

export default function DeleteButton({id} :{id:string}) {
    const {data:session,status} = useSession()
    const router = useRouter()

    if(status === "loading") return <p>Loading...</p>

    if(status === "unauthenticated" || !session?.user.isAdmin) return

   const handleDelete = async() =>{
    const resp = await fetch(`http://localhost:3000/api/products/${id}`,{
      method:"DELETE"
    })

    if(resp.status === 200){
      router.push("/menu")
      toast.success("The product has been deleted!")
    }else{
      const data = await resp.json()
      toast.error(data.message)
    }
   }


  
  return (
    <button className="bg-red-400 p-2 rounded-full absolute top-4 right-4 text-white cursor-pointer" 
    onClick={handleDelete}>
        <Image src="/delete.png" width={20} height={20} alt="close button" />
    </button>
  )
}
