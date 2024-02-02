"use client"

import Countdown from "react-countdown"

const currentDate = new Date();

const endingPage = new Date(currentDate.getTime() + 7 * 60 * 60 * 1000)


export default function CountDown() {
  return (
    <Countdown 
    className="font-bold text-5xl text-yellow-300"
    date={endingPage}/>
  )
}
