import Image from "next/image";
import { Navbar } from "./Componentes/navbar";
import { Hero } from "./Componentes/hero";
import { Servicios } from "./Componentes/servicios";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
    <Navbar/>
    <Hero/>
    <Servicios/>
    </main>
  );
}
