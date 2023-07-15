import Button from "@/components/Button";
import Product from "@/interfaces/product";
import Image from "next/image";

const STRAPI_URI = process.env.STRAPI_URI;

interface SpecialtyProps {
  specialty: Product;
  index: number;
}

export default async function Specialty({ specialty, index }: SpecialtyProps) {
  const invert = index % 2 !== 0 ? "md:flex-row-reverse" : "";

  return (
    <div
      className={`flex flex-col justify-center items-center md:flex-row md:justify-between md:flex-1 ${invert}`}
    >
      <div className="md:w-1/2">
        <h3 className="font-mono text-2xl md:text-4xl">
          {specialty.attributes.Title}
        </h3>
        <div className="w-full h-[1px] shadow-lg bg-gray-400 shadow-lg"></div>
        <p className="text-sm mt-5 mb-5 md:text-md">
          {specialty.attributes.Details}
        </p>
        <div className="flex flex-row justify-between items-center mb-5">
          <p className="text-sm font-bold text-xl md:text-2xl">
            R$ {specialty.attributes.Price}
          </p>
          <Button variant="primary" className="px-4 py-3">
            <p className="text-sm md:text-md">Ver Mais</p>
          </Button>
        </div>
      </div>
      <div
        className={`w-full md:w-1/3 flex ${
          invert ? "md:justify-start" : "md:justify-end"
        }`}
      >
        <div
          className="w-full h-[25rem] md:h-[30rem] bg-cover bg-end bg-no-repeat bg-auto"
          style={{
            background: `url(${STRAPI_URI}${specialty.attributes.Image.data.attributes.url})`,
          }}
        />
      </div>
    </div>
  );
}
