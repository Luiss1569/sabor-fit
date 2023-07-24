import Loading from "./loading";
import Carrossel from "@/views/Home/Carrossel";
import Menu from "@/views/Home/Menu";
import QuemSomos from "@/views/Home/Quem_Somos";
import Specialties from "@/views/Home/Specialties";
import Testemunhas from "@/views/Home/Testemunhas";
import FaleConosco from "@/views/Home/Fale_Conosco";
import { Suspense } from "react";

export const revalidate = 60;

export default function Home() {
  return (
    <div>
      <Carrossel />
      <Specialties />
      <Menu />
      <Suspense fallback = {<Loading/>}>
        <Testemunhas></Testemunhas>
      </Suspense>
      <QuemSomos/>
      <FaleConosco/>
    </div>
  );
}
