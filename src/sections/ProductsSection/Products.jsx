

import { ProductsList } from "@/components/Products/ProductsList";
import CartIcon2 from "../../../public/icons/CartIcon";
import LikeIcon from "../../../public/icons/LikeIcon";
import { StarRate } from "../../components/StarRate/StarRate";
import { Wrapper } from "../../components/Wrapper/Wrapper";

async function getProducts() {
  const baseUrl = process.env.BASE_URL;

  const response = await fetch(
    `${baseUrl}/v1/products/s/view?number=0&size=30&sort=creationDate&order=DESC`,

    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  const products = await response.json();
  return products;
}
export default async function Products() {
  
  const { body } = await getProducts();


  return (
    <ProductsList body={body}/>
  );
}
//grid justify-items-center grid-cols-2
//md:grid-cols-3
