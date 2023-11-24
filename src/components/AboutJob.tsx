
export default function AboutJob() {
  return (
    <section className=" w-full container px-4">
        <div className=" w-full flex ml-4">
         <h1 className="text-left font-bold text-3xl  text-slate-700">Sobre a Vaga: <span className=" text-emerald-500 font-medium">Desenvolvedor de APIs – Javascript</span></h1>
        </div>
          <div>
            <div className="text-left  text-2xl mt-6 text-slate-500 align-baseline leading-relaxed ">
              <p className="font-light ml-8">
                PJ, híbrida (2x ou 3x por semana). O escritório é ao lado do metrô Faria Lima.
                Quando fazemos uma jornada de atendimento, frequentemente temos que nos conectar a APIs existentes 
                de nossos clientes. A plataforma contém uma IDE completa em Typescript e recursos avançados para fazer isso tipo de conexão.
              </p>
           </div>
        </div>
    </section>
  )
}

