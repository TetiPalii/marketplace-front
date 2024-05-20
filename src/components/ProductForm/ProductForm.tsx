"use client";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Categories } from "./Categories";
import { ProductField } from "./ProductField";
import { ProductLable } from "./ProductLable";
import { Condition } from "./Condition";
import { createProduct } from "@/actions/createProduct";
import { useState } from "react";

// interface ProductData {
//   productName: string;
//   price: string;
//   description: string;
//   condition: string;
//   contactPerson: string;
//   phoneNumber: string;
//   email: string;
//   location: string;
//   category: {
//       value: string; 
//       label: string;
      
//   },
//   file?: File
// }
const productSchema = z.object({
  productName: z.string().min(5).max(50),
  category: z.object({
    label: z.string(),
    value:z.string()
  }),
  condition:z.string(),
  price: z.string().min(0),
  description: z.string().min(10).max(500),
  contactPerson: z.string().min(3).max(50),
  phoneNumber: z.string(),
  email: z.string().email(),
  location: z.string().min(3).max(100),
  file: z
  .instanceof(File)
  .refine((file) => file.size <= 5 * 1024 * 1024, { message: 'Размер файла должен быть не более 5MB' })
  .refine((file) => ['image/jpeg', 'image/png', 'application/pdf'].includes(file.type), {
    message: 'Файл должен быть изображением (JPEG/PNG) или PDF',
  }),
  
});
export type ProductSchema = z.infer<typeof productSchema>;

export const ProductForm = () => {

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors, isSubmitting },
  } = useForm<ProductSchema>({resolver: zodResolver(productSchema),});

  const onSubmit = handleSubmit(async (data) => {
    
    const { productName, price: productPrice, description: productDescription, condition: productType, contactPerson: sellerName, phoneNumber: sellerPhoneNumber, email: sellerEmail, location, category: { value: productCategory }, file} = data;
    
    const productData = { 
      productName,
      productPrice,
      productDescription,
      productCategory,
      productType,
      sellerEmail,
      sellerName,
      sellerPhoneNumber,
      location,
        
    }
    const jsonProductData = JSON.stringify(productData)
    
    const formData = new FormData();
    formData.append('request', new Blob([jsonProductData], { type: 'application/json' }));
    formData.append('files', file, file.name)
  
    try {
     
      const newProductData = await createProduct(formData)
      console.log(newProductData)
   } catch (error) {
    console.log(error)
   }
   
  });

  return (
    <>
      <form onSubmit={onSubmit} className="flex flex-col gap-2">
        <h1 className="text-center text-2xl font-medium">Створи оголошення</h1>
        <ProductLable inputName="Назва товару">
          <ProductField
            type="text"
            id="productName"
            register={register("productName")}
          />
        </ProductLable>
        <ProductLable inputName="Категорія товару">
          <Categories control={control} />
        </ProductLable>
        <Controller
          name="file"
          control={control}
          render={({ field }) => (
            <input
              type="file"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  field.onChange(e.target.files[0]);
                }
              }}
            />)}/>
        <ProductLable inputName="Ціна за 1 одиницю товару">
          <ProductField type="number" register={register("price")} />
        </ProductLable>
        <ProductLable inputName="Опис товару">
          <textarea
            className="bg-transparent border border-formColor rounded-2xl"
            name="description"
            cols={30}
            rows={10}
            {...register("description")}
          ></textarea>
        </ProductLable>
        <Condition register={register("condition")}/>

        <div>
          <h3>Контактні дані</h3>
          <ProductLable inputName="Контактна особа" className="text-xs">
            <ProductField type="text" register={register("contactPerson")} />
          </ProductLable>
          <ProductLable inputName="Номер телефону" className="text-xs">
            <ProductField type="phone" register={register("phoneNumber")} />
          </ProductLable>
          <ProductLable inputName="Ел. пошта" className="text-xs">
            <ProductField type="mail" register={register("email")} />
          </ProductLable>
          <ProductLable inputName="Місцезнаходження товару" className="text-xs">
            <ProductField type="text" register={register("location")} />
          </ProductLable>
        </div>

        <button
         
          className="text-center text-white py-3 px-7 min-w-[140px] rounded-xl bg-eggPlant hover:bg-eggPlant focus:bg-eggPlant "
        >
          Опублікувати
        </button>
      </form>
    </>
  );
};
