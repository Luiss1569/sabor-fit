import Product from "@/interfaces/product";
import Image from "next/image";

const STRAPI_URI = process.env.STRAPI_URI;

interface SpecialtyProps {
  specialty: Product;
}

export default async function Specialty({ specialty }: SpecialtyProps) {
  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <img
          src={`${STRAPI_URI}${specialty.attributes.Image.data.attributes.url}`}
          alt={specialty.attributes.Title}
        />
      </div>
      <div>
        <h3>{specialty.attributes.Title}</h3>
        <p>{specialty.attributes.Details}</p>

        <div>
          <h4>Ingredientes</h4>
          <p>{specialty.attributes.Ingredients}</p>
        </div>
      </div>
    </div>
  );
}
