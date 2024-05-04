'use client'
import { useForm } from "react-hook-form";
import { z } from "zod";
import {zodResolver} from '@hookform/resolvers/zod';
import { Categories } from "./Categories";
import { ProductField } from "./ProductField";
import { ProductLable } from "./ProductLable";
import { Condition } from "./Condition";

const productSchema = z.object({
    productName: z.string().min(3).max(50),
    category: z.string().min(3),
    price: z.number().min(0),
    description: z.string().min(10).max(500),
    condition: z.string(),
    contactPerson: z.string().min(3).max(50),
    phoneNumber: z.string().min(9).max(15),
    email: z.string().email(),
    location: z.string().min(3).max(100),
  });
  

export const ProductForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm({resolver:zodResolver(productSchema)});

    const onSubmit = (data) => {
        console.log(data); // You can send the form data to your API here
      };

    return <form action='' className="flex flex-col gap-2">
        <h1 className="text-center text-2xl font-medium" onSubmit={handleSubmit(onSubmit)} >Створи оголошення</h1>
        <ProductLable inputName="Назва товару" >
            <ProductField type="text" id="productName" register={register("productName")}  />
        </ProductLable>
        <ProductLable inputName="Категорія товару">
            <Categories register={'category'}/>
        </ProductLable>
        <ProductLable inputName="Ціна за 1 одиницю товару">
            <ProductField type='number' register={register("price")} />

        </ProductLable>
        <ProductLable inputName="Опис товару">
            <textarea className="bg-transparent border border-formColor rounded-2xl" name="" id="" cols={30} rows={10} {...register("description")}></textarea>
        </ProductLable>
        <Condition register={register("condition")}/>

        <div><h3>Контактні дані</h3>
            <ProductLable inputName="Контактна особа" className="text-xs">
                <ProductField type='text' register={register("contactPerson")}/>

            </ProductLable>
            <ProductLable inputName="Номер телефону" className="text-xs">
                <ProductField type='number'  register={register("phoneNumber")}/>

            </ProductLable>
            <ProductLable inputName="Ел. пошта" className="text-xs">
                <ProductField type='mail' register={register("email")}/>

            </ProductLable>
            <ProductLable inputName="Місцезнаходження товару" className="text-xs">
                <ProductField type='text' register={register("location")}/>

            </ProductLable></div>

        <button type="submit" className="text-center text-white py-3 px-7 min-w-[140px] rounded-xl bg-eggPlant hover:bg-eggPlant focus:bg-eggPlant ">Опублікувати</button>
    </form>

}