import Loading from "./loading";
import Carrossel from "@/views/Home/Carrossel";
import Menu from "@/views/Home/Menu";
import Specialties from "@/views/Home/Specialties";
import Testemunhas from "@/views/Home/Testemunhas";
import { Suspense } from "react";

export const revalidate = 60 

export default function Home() {
  return (
    <div>
      <Carrossel />
      <Suspense fallback={<Loading />}>
        <Specialties />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Menu />
      </Suspense>
      <Suspense fallback = {<Loading/>}>
        <Testemunhas></Testemunhas>
      </Suspense>
    </div>
  );
}
