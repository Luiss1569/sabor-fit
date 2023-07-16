import Product from "@interfaces/product";

const STRAPI_TOKEN = process.env.STRAPI_TOKEN;

const BASE_URL = process.env.STRAPI_URI + "/api" || "http://127.0.0.1:1337/api";

const headers = new Headers({
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: `Bearer ${STRAPI_TOKEN}`,
});

export async function getApiSpecialties(): Promise<Product[]> {
  const response = await fetch(
    `${BASE_URL}/produtos?filters[emphasis]=true&populate=*`,
    {
      method: "GET",
      headers,
    }
  ).then((res) => res.json());

  return response.data;
}
