import Link from "next/link"
import { FaForumbee } from "react-icons/fa"
import { MdHive } from "react-icons/md"

export default function Header() {
  return (
    <nav className="w-full bg-slate-950 h-24 flex items-center justify-between px-24">
      <div className="flex gap-6">
      <section className="container flex items-center gap-3">
        <Link href={"https://colmeia.me/"} className="flex gap-2 items-center hover:text-slate-500 cursor-default hover:scale-110 transition-transform">
          <FaForumbee size={50} className="text-emerald-400"/>
          <h1 className="font-bold text-3xl text-emerald-400">Colmeia Test</h1>
        </Link>
      </section>
      </div>
      <div className="flex justify-center items-center gap-20 text-xl">
        <Link href={""} className="text-slate-500 hover:text-emerald-500 cursor-default hover:scale-110 transition-transform">Candidato</Link>
        <Link href={""} className="text-slate-500 hover:text-emerald-500 cursor-default hover:scale-110 transition-transform">Sobre a Colmeia</Link>
        <Link href={""} className="text-slate-500 hover:text-emerald-500 cursor-default hover:scale-110 transition-transform">Sobre a Vaga</Link>
      </div>
      <div className="text-slate-400 hover:text-emerald-400">
        <MdHive size={30} />Sair
      </div>
    </nav>
  )
}

