/* eslint-disable react/no-unescaped-entities */
import { MdHive } from "react-icons/md";
import Link from "next/link";
import Patricia from "@/components/Patricia";
import Image from "next/image";
import fizzbuzz from "public/fizzbuuz.png"
import book from "public/book.png"


export default function Home() {
  return (
    <>
    <div className="flex items-center  mb-16">
      <Patricia />
    </div>
    <div className="flex container justify-center items-center">
     <section className=" w-full container gap-2 py-16 px-4 ">
        <div className=" w-full flex">
         <h1 className="text-left font-bold text-3xl  text-slate-700">Sobre a Colmeia</h1>
        </div>
          <div>
            <div className="text-left  text-2xl mt-8 text-slate-500 align-baseline leading-relaxed">
              <p className="font-light ">
              A <Link href="https://colmeia.me/" className="text-emerald-500 font-bold">Colmeia</Link> é a tecnologia líder do mercado em comunicação digital. A plataforma possui atendimento automatizado, atendimento humano, marketing e analytics. Recebemos milhares de conexões por segundo, trabalhamos com tecnologia de ponta, clientes importantes. 
              </p>
            </div>
          </div>
      </section>
     <MdHive size={80} className="text-slate-400"/>
      <section className=" w-full container gap-2 py-16 px-4">
        <div className=" w-full flex ml-4">
         <h1 className="text-left font-bold text-3xl  text-slate-700">Sobre a Vaga: <span className=" text-emerald-500 font-medium">Desenvolvedor de APIs – Javascript</span></h1>
        </div>
          <div>
            <div className="text-left  text-2xl mt-8 text-slate-500 align-baseline leading-relaxed ">
              <p className="font-light ml-8">
                PJ, híbrida (2x ou 3x por semana). O escritório é ao lado do metrô Faria Lima.
                Quando fazemos uma jornada de atendimento, frequentemente temos que nos conectar a APIs existentes 
                de nossos clientes. A plataforma contém uma IDE completa em Typescript e recursos avançados para fazer isso tipo de conexão.
              </p>
            </div>
          </div>
      </section>
    </div>

    {/* QUESTOES */}

    <h2 className="text-4xl text-emerald-700 mb-10 mt-16 font-light">Questões</h2>
    <section className="text-3xl bg-gradient-to-bl from-slate-300 from-10% via-teal-100 via-30% to-slate-300 to-90%  py-4 px-4 justify-center items-center container rounded-xl mb-8">
      <div className="">
        <p className="text-green-900 text-3xl items-center flex  mb-2 mt-4 font-light">Questão 1:</p>
        <p className="text-green-900 text-2xl font leading-relaxed font-light">
          O parâmetro numbers é um Array. Sua tarefa é percorrer esse array e:
          se for divizivel por 5, print "buzz". Se for divisivel por 3 e 5, print "fizzBuzz"
        </p>
        <span className="text-emerald-300 pl-4 text-lg">
          Solução:
          <div>
            <Image alt="codigo resolvido" src={fizzbuzz}  className="object-cover rounded-xl mb-4 cursor-default hover:scale-110 transition-transform" >

            </Image>
          </div>
         
        </span>
      </div>
    </section>
    <section className="text-3xl bg-gradient-to-bl from-slate-300 from-10% via-teal-100 via-30% to-slate-300 to-90%  py-4 px-4 justify-center items-center container rounded-xl mb-4 ">
      <div className="">
        <p className="text-emerald-900 text-3xl items-center flex  mb-2 mt-4 font-light">Questão 2:</p>
        <p className="text-emerald-900 text-2xl font leading-relaxed font-light">
          Temos uma variável book. Ela é uma string e contem apenas letras minúsculas sem acento e espaços. <br />
           Sua tarefa é percorrer a variável book e contar a quantidade de ocorrências de cada letra E o número de palavras.<br />
           EXEMPLO DE OUTPUT: 12333 palavras;  a: 1032, b:129, c: 1111 etc.<br />

           const book"este e o conteudo apenas com palavras minusculas e espacos";
        </p>
        <span className="text-emerald-700 pl-4 text-lg">
          Solução:
          <div>
            <Image alt="codigo resolvido" src={book}  className="object-cover rounded-xl mb-4 cursor-default hover:scale-110 transition-transform" >

            </Image>
          </div>
         
        </span>
      </div>
    </section>

    </>
  )
}




