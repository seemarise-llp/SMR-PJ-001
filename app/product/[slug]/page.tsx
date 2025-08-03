import type { Metadata } from "next";
import { notFound } from "next/navigation";

async function getProduct(slug: string) {
  const id = Number(slug);
  const products = [
    { id: 1, name: "Apple", description: "A juicy apple" },
    { id: 2, name: "Banana", description: "A ripe banana" },
  ];
  return products.find((p) => p.id === id) || null;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  let { slug } = await params;
  const product = await getProduct(slug);
  if (!product) return { title: "Product Not Found" };
  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductPage(props: { params: { slug: string } }) {
  const { params } = props;
  let { slug } = await params;
  const product = await getProduct(slug);

  if (!product) return notFound();

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
    </div>
  );
}
