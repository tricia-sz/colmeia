import Image from "next/image";
import "./globals.css";
import { League_Spartan } from "next/font/google";
import headerDetail from "public/header.svg"
import Footer from "@/components/Footer";
import Header from "@/components/Header";

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
        <main className="bg-slate-300 min-h-screen flex flex-col items-center">
          <Header />
          <Image alt="header" src={headerDetail}></Image>
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}