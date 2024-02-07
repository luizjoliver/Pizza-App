"use client"

import { useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function SuccesPage() {
  const searchParams = useSearchParams()
  const payment_intent = searchParams.get("payment_intent")
  const router = useRouter()

  useEffect(() =>{
    const makeRequest = async () =>{
      try {
        await fetch(`http://localhost:3000/api/confirm/${payment_intent}`,{
          method:"PUT"
        })
        router.push("/orders")
      } catch (error) {
        
      }
    }
    makeRequest()
  },[payment_intent,router])

  return (
        <div>
            Succes Page
        </div>
  )
}
