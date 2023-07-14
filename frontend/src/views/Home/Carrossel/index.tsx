import Button from "@components/Button";
import cmgCarrossel from "@img/carrossel.png";
import Image from "next/image";

export default function Carrossel() {
  return (
    <section className="flex flex-col justify-center lg:items-center relative lg:flex-row">
      <div className="flex flex-col justify-around lg:items-start items-end h-96">
        <h1 className="font-mono text-4xl lg:text-5xl">
          Comida <strong className="text-primary">saudável</strong> também pode
          ter <strong className="text-secondary">sabor</strong>.
        </h1>
        <p className="text-lg lg:text-xl">
          Transforme seu corpo e sua vida com os sabores irresistíveis dos
          nossos pratos.
        </p>
        <Button variant="secondary">Veja o cardápio</Button>
      </div>
      <div className="flex justify-center w-full mt-5 lg:mt-0 lg:w-2/3 m-auto">
        <Image src={cmgCarrossel} alt="carrossel" />
      </div>
    </section>
  );
}
