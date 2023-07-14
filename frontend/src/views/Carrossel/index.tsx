import Button from "@components/Button";
import cmgCarrossel from "@img/carrossel.png";
import Image from "next/image";

export default function Carrossel() {
  return (
    <section className="flex flex-col justify-center items-center relative lg:flex-row">
      <div className="flex flex-col justify-around items-start h-96">
        <h1 className="font-mono text-5xl">
          Comida <strong className="text-primary">saudável</strong> também pode
          ter <strong className="text-secondary">sabor</strong>
        </h1>
        <p>
          Transforme seu corpo e sua vida com os sabores irresistíveis dos
          nossos pratos.
        </p>
        <Button variant="secondary">Veja o cardápio</Button>
      </div>
      <div className="w-1/2">
        <Image src={cmgCarrossel} alt="carrossel" />
      </div>
    </section>
  );
}