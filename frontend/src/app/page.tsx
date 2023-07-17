import Loading from "@/components/Loading";
import Carrossel from "@/views/Home/Carrossel";
import Menu from "@/views/Home/Menu";
import Specialties from "@/views/Home/Specialties";
import { Suspense } from "react";

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
    </div>
  );
}
