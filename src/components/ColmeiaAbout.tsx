import Link from "next/link"

export default function ColmeiaAbout() {
  return (
    <section className=" w-full container px-4">
      <div className=" w-full flex">
        <h1 className="text-left font-bold text-3xl  text-slate-700">Sobre a Colmeia</h1>
      </div>
      <div>
        <div className="text-left  text-2xl mt-6 text-slate-500 align-baseline leading-relaxed">
          <p className="font-light ">
          A <Link href="https://colmeia.me/" className="text-emerald-500 font-bold">Colmeia</Link> É a tecnologia líder do mercado em comunicação digital. A plataforma possui atendimento automatizado, atendimento humano, marketing e analytics. 
           Recebem milhares de conexões por segundo, trabalham com tecnologia de ponta e clientes importantes. 
          </p>
        </div>
      </div>
    </section>
  )
}

