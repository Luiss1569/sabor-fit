import Modal from "@/components/Modal";
import { getApiProductBySlug, getApiProducts } from "@/services/api";
import Information from "@/views/Product/Information";
import { Metadata, ResolvingMetadata } from "next";

export const revalidate = 60;

export async function generateStaticParams() {
  const products = await getApiProducts();

  return products.map((product) => ({
    slug: product.attributes.slug,
  }));
}

async function getProduct(slug: string) {
  const product = await getApiProductBySlug(slug);

  return product;
}

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata(
  { params }: ProductPageProps,
  parent?: ResolvingMetadata
): Promise<Metadata> {
  const product = await getProduct(params.slug);

  return {
    title: product.attributes.Title,
  };
}

export default async function ProductPage({
  params: { slug },
}: ProductPageProps) {
  const product = await getProduct(slug);

  return (
    <Modal>
      <Information product={product} />
    </Modal>
  );
}
