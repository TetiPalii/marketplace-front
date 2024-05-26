
'use client'
import useSWR  from 'swr';
import { ProductsList } from "@/components/Products/ProductsList";
import { getProducts } from '@/actions/getProducts';


// async function getProducts() {
//   const baseUrl = process.env.BASE_URL;

//   const response = await fetch(
//     `${baseUrl}/v1/products/s/view?number=0&size=30&sort=creationDate&order=DESC`,

//     {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     },
//   );

//   const products = await response.json();
//   return products;
// }
export default function Products() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
 
  
  const { data, error } = useSWR(
    `${baseUrl}/v1/products/s/view`,
    getProducts
  );
  if (error) return <div>Failed to load products</div>;
  if (!data) return <div>Loading...</div>;
  // const { body } = await getProducts();


  return (
    <ProductsList products={data.body}/>
  );
}

