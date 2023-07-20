import Button from "@/components/Button";
import Product from "@/interfaces/product";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { FaFire } from "react-icons/fa";

const STRAPI_URI = process.env.STRAPI_URI;

interface InformationProps {
  product: Product | undefined;
}

export default function Information({ product }: InformationProps) {
  if (!product) {
    return null;
  }

  return (
    <div
      className={`flex flex-col justify-center items-center md:flex-row md:justify-between md:flex-1 gap-10`}
    >
      <div className={`w-full md:w-1/3 flex md:justify-start`}>
        <div
          className="w-full h-[25rem] md:h-[30rem] bg-cover bg-end bg-no-repeat bg-auto rounded-2xl"
          style={{
            background: `url(${STRAPI_URI}${product.attributes.Image.data.attributes.url})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>
      <div className="md:w-1/2 flex flex-1 h-full flex-col justify-start content-between flex-wrap md:items-start">
        <h3 className="font-mono text-2xl md:text-4xl">
          {product.attributes.Title}
        </h3>
        <div className="w-full h-[1px] shadow-lg bg-gray-400 shadow-lg"></div>
        <p className="text-sm mt-5 mb-5 md:text-md">
          <ReactMarkdown>{product.attributes.Details}</ReactMarkdown>
        </p>
        <div>
          <h4 className="text-sm font-bold text-xl md:text-xl">Ingredientes</h4>
          <p className="text-sm md:text-md">
            <ReactMarkdown>{product.attributes.Ingredients}</ReactMarkdown>
          </p>
        </div>

        <div className="flex w-full flex-row justify-around items-center mt-10">
          <div className="flex flex-row justify-center items-center gap-5">
            <p className="text-sm font-bold text-xl md:text-2xl">
              R$ {product.attributes.Price}
            </p>

            <div className="flex flex-row justify-center items-baseline">
              <i className="text-lg text-red-500">
                <FaFire />
              </i>
              <p className="text-lg md:text-md">
                {product.attributes.Calories}Kl
              </p>
            </div>
          </div>
          <Button variant="primary" className="px-4 py-3">
            <p className="text-sm md:text-md">Ver Mais</p>
          </Button>
        </div>
      </div>
    </div>
  );
}
