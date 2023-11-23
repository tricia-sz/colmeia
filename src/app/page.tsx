import { GiBee } from "react-icons/gi";
import { MdHive } from "react-icons/md";
import { BiHive } from "react-icons/bi";


export default function Home() {
  return (
    
    <section className=" w-full container gap-2 mt-16 ">
      <div className=" w-full flex">
        <h1 className="text-left font-bold text-3xl  text-slate-700">Um pouco sobre a Colmeia</h1><BiHive />
      </div>
      <div>
      <p className="text-left font-bold text-3xl mt-8 mb-10 text-slate-500">
         A Colmeia é a tecnologia líder do mercado em comunicação digital. A plataforma possui atendimento automatizado, atendimento humano, marketing e analytics. Recebemos milhares de conexões por segundo, trabalhamos com tecnologia de ponta, clientes importantes. 
        </p>
      </div>
    </section>
  )
}
