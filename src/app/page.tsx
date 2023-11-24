/* eslint-disable react/no-unescaped-entities */
import { MdHive } from "react-icons/md";
import Patricia from "@/components/Patricia";
import Questions from "@/components/Questions";
import AboutJob from "@/components/AboutJob";
import ColmeiaAbout from "@/components/ColmeiaAbout";


export default function Home() {
  return (
    <>
      <div className="flex items-center  mb-16">
        <Patricia />
      </div>
      <div className="flex container justify-center items-center">
      <ColmeiaAbout />
        <MdHive size={80} className="text-slate-400"/>
        <AboutJob />
      </div>
      <Questions />

    </>
  )
}




