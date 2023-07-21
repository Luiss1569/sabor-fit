import CustomerFeedback from "@/interfaces/customerFeedback";
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
    `${BASE_URL}/produtos?filters[Emphasis]=true&populate=*&pagination[limit]=3`,
    {
      method: "GET",
      headers,
    }
  ).then((res) => res.json());

  return response.data;
}

export async function getApiRecentProducts(): Promise<Product[]> {
  const response = await fetch(
    `${BASE_URL}/produtos?populate=*&pagination[limit]=4&sort=createdAt:desc`,
    {
      method: "GET",
      headers,
    }
  ).then((res) => res.json());

  return response.data;
}

export async function getApiTopSellingProducts(): Promise<Product[]> {
  const response = await fetch(
    `${BASE_URL}/produtos?populate=*&pagination[limit]=4&sort=Price:desc`,
    {
      method: "GET",
      headers,
    }
  ).then((res) => res.json());

  return response.data;
}

export async function getApiCustomersFeedbacks(): Promise<CustomerFeedback[]> {
  console.log("STRAPI_URI:", process.env.STRAPI_URI);
  console.log("STRAPI_TOKEN:",STRAPI_TOKEN)
  console.log(BASE_URL)
  console.log(headers)
  const response = await fetch(
    `${BASE_URL}/api/customer-feedbacks?populate=*&pagination[limit]=4&sort`,
    {
      method: "GET",
      headers,
    }
  ).then((res) => res.json());

  console.log("API Response:", response);

  return response.data;
}
