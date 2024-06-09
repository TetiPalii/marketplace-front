"use client";
import { AddProduct } from "@/components/AddProduct/AddProduct";
import { useAppSelector } from "@/store/hooks";


export const AddProductSection = () => {
  
  const isLoggedIn = useAppSelector((state):Boolean => state.user.isLoggedin);

  return <section className="pt-7">{isLoggedIn && <AddProduct />}</section>;
};
