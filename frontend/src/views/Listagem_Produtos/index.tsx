import { getApiProducts } from "@/services/api";
import { Item } from "./item";

async function getProducts() {
  const products = await getApiProducts();

  return products || [];
}

export default async function ListagemProdutos() {
  const Products = await Promise.all([getProducts()])
    .then(([products]) => products)
    .catch((error) => {
      console.error("Error fetching products:", error);
      return [];
    });

  return (
    <section className="flex flex-wrap justify-evenly gap-4 my-auto">
      {Products.map((product) => (
        <Item product={product} key={product.id} />
      ))}
    </section>
  );
}
