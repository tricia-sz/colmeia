import Link from "next/link"
import React from 'react'
import { BiHive } from "react-icons/bi"
import { FaChrome, FaGithub } from "react-icons/fa"
import { MdLocationPin } from "react-icons/md"
import { Mel } from "./Mel"

function Patricia() {
  return (
    
   <> 
      <section className=" w-full container gap-2 cursor-default hover:scale-110 transition-transform mx-8">
        <div className=" w-full flex">
        <BiHive size={30} className="text-slate-700"/><h1 className="text-left font-bold text-3xl  text-slate-700">Candidato(a): <span className=" text-emerald-500 font-medium">Patrícia Souza</span> </h1>
        </div>
        <div>  
        <div className="text-left  text-3xl mt-4 text-slate-500 align-baseline pl-8 font-light">
          <Link href={""} className="flex  gap-2 hover hover:text-emerald-500 cursor-default hover:scale-110 transition-transform">
            <MdLocationPin />Local: São Paulo - SP
          </Link>
          <Link  href="https://tricia-sz.netlify.app/" className="flex gap-2 hover hover:text-emerald-500 mt-4 cursor-default hover:scale-110 transition-transform">
            <FaChrome /> Portifólio do candidato
          </Link>
          <Link href="https://github.com/tricia-sz" className="flex gap-2 hover hover:text-emerald-500 mt-4 cursor-default hover:scale-110 transition-transform">
            <FaGithub />tricia-sz
          </Link>
        </div>
      </div>
    </section>
    <div className="flex cursor-default hover:scale-110 transition-transform">
       <Mel />

      </div>
  </>
  )
}

export default Patricia