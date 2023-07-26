import { getApiProducts } from "@/services/api";
import { Item } from "./item";

async function getProducts(){
    const products = await getApiProducts()

    return products || []
}

export default async function ListagemProdutos(){
    const Products = await Promise.all([getProducts()]).then(([products]) => products)
    .catch(error => {
      console.error("Error fetching products:", error);
      return [];
    });
    
    return(
        <section className="bg-gray-200 p-0 pb-10">
            <div className="flex flex-wrap justify-evenly gap-4 md:gap-0 mx-14">
                {Products.map((product)=>(
                    <Item product={product} key={product.id}/>
                ))}
            </div>
        </section>
    )
}