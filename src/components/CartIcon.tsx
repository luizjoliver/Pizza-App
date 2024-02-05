"use client"
import { useCartStore } from '@/utils/zustand/store'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'


export default function CartIcon() {
  const {totalItems} = useCartStore()

  useEffect(() =>{
    useCartStore.persist.rehydrate()
  },[])

  return (
    <Link href="/cart" className='flex items-center gap-4'>
      <div className='relative w-8 h-8 md:w-5 md:h-5'>
        <Image src="/cart.png" alt='cart image' fill/>
      </div>
      <span>Cart({totalItems})</span>
    </Link>
  )
}
