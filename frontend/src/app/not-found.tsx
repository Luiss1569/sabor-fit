"use client"; // Error components must be Client Components

import { FaPlaneDeparture } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <section className="flex flex-col justify-center items-center h-[70vh] gap-4">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-xl">
        <FaPlaneDeparture className="inline-block" /> Page not found
      </p>
      <button onClick={() => goBack()}>Go back home</button>
    </section>
  );
}
