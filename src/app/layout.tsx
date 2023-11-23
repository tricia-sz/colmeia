import "./globals.css";
import { League_Spartan } from "next/font/google";
import Link from "next/link";
import { FaForumbee } from "react-icons/fa";
import { MdHive } from "react-icons/md";


const spartan = League_Spartan({ subsets: ["latin"] });

export const metadata = {
  title: "Colmeia Test",
  description: "Processo de Seleção - Vaga [Desenvolvedor de APIs - Javascript]",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    
    <html lang="en">
      <body className={spartan.className}>
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
          {children}
        </main>
      </body>
    </html>
  );
}