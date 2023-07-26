import { getApiRecentProducts, getApiTopSellingProducts } from "@/services/api";
import Title from "@components/Title";
import List from "./item";
import { Link } from "@/components/Button";

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
    <section className="p-10 flex flex-col justify-center md:items-center relative mt-20 ">
      <Title label="Totalmente Fitness">Menu</Title>
      <div className="flex flex-col justify-center items-center md:flex-row md:justify-around md:flex-1 w-full gap-10">
        <div className="flex flex-col justify-center items-center">
          <h4 className="text-2xl md:text-3xl font-mono mb-5">Mais vendidos</h4>
          <List.Container>
            {topSellingProducts.map((product) => (
              <List.Item product={product} key={product.id} />
            ))}
          </List.Container>
        </div>
        <div className="flex flex-col justify-center items-center ">
          <h4 className="text-2xl md:text-3xl font-mono mb-5">
            Adicionados recentemente
          </h4>
          <List.Container>
            {recentProducts.map((product) => (
              <List.Item product={product} key={product.id} />
            ))}
          </List.Container>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center w-full gap-5 pt-10">
        <h4 className="text-2xl md:text-3xl font-mono hidden md:inline">
          Veja todos os produtos
        </h4>
        <Link variant="primary" href={`/products`}>
          Ver todos os produtos
        </Link>
      </div>
    </section>
  );
}
