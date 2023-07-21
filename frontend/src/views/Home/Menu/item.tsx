import Link from "next/link";
import Product from "@/interfaces/product";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const STRAPI_URI = process.env.STRAPI_URI;

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

interface ItemProps extends React.HTMLAttributes<HTMLDivElement> {
  product: Product;
}

export const Item = ({ product, ...props }: ItemProps) => {
  return (
    <Link href={`/product/${product.attributes.slug}`}>
      <div
        className="flex flex-col justify-center items-center md:flex-row md:justify-between md:flex-1 max-w-[20rem] md:max-w-[30rem] p-2 px-2 py-3 md:p-10 gap-1"
        {...props}
      >
        <div className="flex flex-row justify-center">
          <div
            id="avatar"
            className="w-16 h-16 rounded-full bg-gray-300"
            style={{
              background: `url(${STRAPI_URI}${product.attributes.Image.data.attributes.url})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>

        <div>
          <div className="flex flex-row justify-center items-baseline">
            <h6 className="text-md md:text-lg font-semibold w-full">
              {product.attributes.Title}
            </h6>
            <p className="text-md">R${product.attributes.Price}</p>
          </div>
          <p className="text-sm text-ellipsis overflow-hidden">
            <ReactMarkdown>
              {product.attributes.Details.substring(0, 45) + "..."}
            </ReactMarkdown>
          </p>
        </div>
      </div>
    </Link>
  );
};

export const Container = ({ children, ...props }: ContainerProps) => {
  return (
    <div
      className="flex flex-col justify-center items-center md:justify-between md:flex-1 divide-y-2 divide-gray-400"
      {...props}
    >
      {children}
    </div>
  );
};

const exportDefault = {
  Item,
  Container,
};

export default exportDefault;
