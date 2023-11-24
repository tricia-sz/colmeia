import Link from "next/link"
import { FaLinkedin } from "react-icons/fa"


function Footer() {
  return (
     <nav className="w-full bg-slate-950 h-24 flex  px-24 mt-24">
      <div className="flex  text-xl mx-auto justify-center items-center cursor-default hover:scale-110 transition-transform">
          <p className="text-slate-500 hover:text-emerald-500 flex gap-2">
          <FaLinkedin size={24}/> 
            <Link href={"https://www.linkedin.com/in/tricia-sz/"}>
              By Trícia Sowza</Link>
               <span  className="text-green-500">❤</span>
               2023</p>
       </div>
    </nav>

  )
}

export default Footer