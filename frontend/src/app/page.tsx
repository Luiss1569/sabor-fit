import Carrossel from "@/views/Home/Carrossel";
import Specialties from "@/views/Home/Specialties";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <Carrossel />
      <Suspense fallback={<div>Carregando...</div>}>
        <Specialties />
      </Suspense>
    </div>
  );
}
