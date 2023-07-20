import Modal from "@/components/Modal";
import { getApiProductBySlug } from "@/services/api";
import Information from "@/views/Product/Information";

export const revalidate = 60;

async function getProduct(slug: string) {
  const product = await getApiProductBySlug(slug);

  return product;
}

interface ProductPageProps {
  params: {
    slug: string;
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
