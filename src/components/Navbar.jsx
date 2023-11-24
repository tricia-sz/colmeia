import React from 'react'
import Link from "next/link";
import { FaForumbee } from "react-icons/fa";
import { MdHive } from "react-icons/md";


function Navbar() {
  return (
    <main className="bg-gray-100 min-h-screen flex flex-col items-center">
      <nav className="w-full bg-slate-950 h-24 flex items-center justify-center">
        <section className="container flex items-center gap-3">
          <Link href={"https://colmeia.me/"} className="flex gap-2 items-center hover:text-slate-500">
            <FaForumbee size={50} className="text-emerald-400"/>
              <h1 className="font-bold text-3xl text-emerald-400">Colmeia Test</h1>
            </Link>
        </section>
        <div className="text-emerald-400 hover:text-slate-500">
          <MdHive size={30} />Sair
        </div>
      </nav>
    </main>
  )
}

export default Navbar