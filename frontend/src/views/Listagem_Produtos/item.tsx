import Product from "@/interfaces/product";
import React from "react";
import { Link } from "@/components/Button";
import { FaFire } from "react-icons/fa";

const STRAPI_URI = process.env.STRAPI_URI;

interface ItemProps extends React.HTMLAttributes<HTMLDivElement> {
  product: Product;
}

export const Item = ({ product, ...props }: ItemProps) => {
  return (
    <div className="flex flex-col w-[16rem] h-content">
      <div
        className="flex flex-row-reverse w-full rounded-t-3xl h-[16rem]"
        style={{
          background: `url(${STRAPI_URI}${product.attributes.Image.data.attributes.url})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex items-center bg-gray-300 w-auto text-xs h-6 p-1 px-2 rounded-3xl my-2 mx-5 shadow-xl">
          {/* <Icon icon="fluent-mdl2:calories" /> */}
          <i className="text-red-500">
            <FaFire />
          </i>
          <p>{product.attributes.Calories}kl</p>
        </div>
      </div>
      <div className="bg-white flex flex-col rounded-b-3xl p-4 gap-6 shadow-xl flex-1 justify-around align-center">
        <h3 className="flex justify-center text-center">
          {product.attributes.Title}
        </h3>
        <div className="flex justify-between">
          R${product.attributes.Price}{" "}
          <Link
            variant="primary"
            href={`/product/${product.attributes.slug}`}
            className="flex justify-center rounded-3xl items-center text-xs w-20 h-8 px-4 whitespace-nowrap"
          >
            Ver mais
          </Link>
        </div>
      </div>
    </div>
  );
};
