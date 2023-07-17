import { getApiRecentProducts, getApiTopSellingProducts } from "@/services/api";
import Title from "@components/Title";
import List from "./item";

export const revalidate = 60;

async function getRecentProducts() {
  const specialties = await getApiRecentProducts();

  return specialties || [];
}

async function getTopSellingProducts() {
  const specialties = await getApiTopSellingProducts();

  return specialties || [];
}

export default async function Menu() {
  const [recentProducts, topSellingProducts] = await Promise.all([
    getRecentProducts(),
    getTopSellingProducts(),
  ]);

  return (
    <section className="bg-gray-200 p-10 flex flex-col justify-center md:items-center relative mt-20 ">
      <Title label="Totalmente Fitness">Menu</Title>
      <div className="flex flex-col justify-center items-center md:flex-row md:justify-around md:flex-1 w-full">
        <div className="flex flex-col justify-center items-center">
          <h4 className="text-xl md:text-xl">Mais vendidos</h4>
          <List.Container>
            {topSellingProducts.map((product) => (
              <List.Item product={product} key={product.id} />
            ))}
          </List.Container>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h4 className="text-xl md:text-xl">Adicionados recentemente</h4>
          <List.Container>
            {recentProducts.map((product) => (
              <List.Item product={product} key={product.id} />
            ))}
          </List.Container>
        </div>
      </div>
    </section>
  );
}
