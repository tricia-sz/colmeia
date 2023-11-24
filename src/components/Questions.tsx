/* eslint-disable react/no-unescaped-entities */
import Image from "next/image"
import fizzbuzz from "public/fizzbuuz.png"
import book from "public/book.png"

function Questions() {
  return (
    <>
      <h2 className="text-4xl text-emerald-600 mb-10 mt-16 font-light">Questões</h2>
    <section className="text-3xl bg-gradient-to-bl from-slate-300 from-10% via-teal-100 via-30% to-slate-300 to-90%  py-4 px-4 justify-center items-center container rounded-xl mb-10">
      <div className="px-12 ">
        <p className="text-slate-500 text-2xl items-center flex  mb-2 mt-4 font-light ">Questão 1:</p>
        <p className="text-green-900 text-2xl font leading-relaxed font-light">
          O parâmetro numbers é um Array. Sua tarefa é percorrer esse array e:
          se for divizivel por 5, print "buzz". Se for divisivel por 3 e 5, print "fizzBuzz".
        </p>
        <span className="text-emerald-700 pl-4 text-lg ">
          Solução:
          <div className="justify-center items-center mx-0 flex">
            <Image alt="codigo resolvido" src={fizzbuzz}  className="object-cover rounded-xl mb-4 cursor-default hover:scale-110 transition-transform" >
            </Image>
          </div>
        </span>
      </div>
    </section>
    
    <section className="text-3xl bg-gradient-to-bl from-slate-300 from-10% via-teal-100 via-30% to-slate-300 to-90%  py-4 px-4 justify-center items-center container rounded-xl mb-4 ">
      <div className="px-12">
        <p className="text-slate-500 text-2xl items-center flex  mb-2 mt-4 font-light">Questão 2:</p>
        <p className="text-emerald-900 text-2xl font leading-relaxed font-light">
          Temos uma variável book. Ela é uma string e contem apenas letras minúsculas sem acento e espaços. <br />
           Sua tarefa é percorrer a variável book e contar a quantidade de ocorrências de cada letra E o número de palavras.<br />
           EXEMPLO DE OUTPUT: 12333 palavras;  a: 1032, b:129, c: 1111 etc.<br />

           const book"este e o conteudo apenas com palavras minusculas e espacos";
        </p>
        <span className="text-emerald-700 pl-4 text-lg">
          Solução:
          <div className="justify-center items-center mx-0 flex">
            <Image alt="codigo resolvido" src={book}  className="object-cover rounded-xl mb-4 cursor-default hover:scale-110 transition-transform" >

            </Image>
          </div>
        </span>
      </div>
    </section>
    </>

  )
}

export default Questions