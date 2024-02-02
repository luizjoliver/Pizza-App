import Link from "next/link";


export default function Footer() {
  return (
    <footer className="h-12 md:h-24 flex justify-between items-center p-4 lg:p-20 xl:p-40 text-red-500">

      <Link href="/" className="font-bold text-xl">MASSIMO</Link>
      <p>&copy; ALL RIGHTS RESERVED.</p>

    </footer>
  )
}
