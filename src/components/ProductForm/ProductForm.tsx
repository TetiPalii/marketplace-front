"use client";
import { useSWRConfig } from "swr";
import {
    Controller,
    useForm,
} from "react-hook-form";
import { InputMask } from "primereact/inputmask";
import { zodResolver } from "@hookform/resolvers/zod";
import { Categories } from "./Categories";
import { ProductField } from "./ProductField";
import { ProductLable } from "./ProductLable";
import { Condition } from "./Condition";
import { createProduct } from "@/actions/createProduct";
import { useEffect} from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { AddFoto } from "./AddFoto";
import Link from "next/link";
import { productSchema } from "./schema";



export const ProductForm = () => {
  const { mutate } = useSWRConfig();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    trigger,
    control,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(productSchema) });
  const dispatch = useAppDispatch()
    const token:string = useAppSelector((state) => {
     return state.user?.user?.token
 })

 
const onSubmit = handleSubmit(
    async (data) => {
        // console.log(data)
        const {
            productName,
            productPrice,
            productDescription,
            productType,
            sellerName,
            sellerPhoneNumber,
            sellerEmail,
            location,
            category: {
                value: productCategory,
            },
            files,
        } = data;
    
    const newPhoneNumber = sellerPhoneNumber.replace(/[^\d+]/g,"")
    
        const productData = {
            productName,
            productPrice,
            productDescription,
            productCategory,
            productType,
            sellerEmail,
            sellerName,
            sellerPhoneNumber:newPhoneNumber,
            location,
        };

        const jsonProductData =
            JSON.stringify(productData);
        localStorage.setItem('productForm', jsonProductData);
        const formData = new FormData();
        formData.append(
            "request",
            new Blob([jsonProductData], {
                type: "application/json",
            })
        );
        
        if (files.length) {
            files.forEach((file) =>
                formData.append(
                    "files",
                    file,
                    file.name
                )
            );
        }

        try {
            await createProduct(
                    formData,
                    mutate,token
                );

        } catch (error) {
            console.error(error.message);
        }

        router.push("/");
    }
);
useEffect(() => {
  const savedData = localStorage.getItem('productForm');
  
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    for (const key in parsedData) {
      setValue(key, parsedData[key]);
    }
  }
}, [setValue]);
  
const watchedFields = watch();
  
  useEffect(() => {
    if (Object.values(watchedFields).some(field => field !== '')) {
      localStorage.setItem('productForm', JSON.stringify(watchedFields));
    }
   
  }, [watchedFields, dispatch]);

    return (
        <>
            <form
                onSubmit={onSubmit}
                className="flex flex-col gap-2 w-full">
                <h1 className="text-center text-2xl font-medium">
                    Створи оголошення
                </h1>

                <div className="flex flex-col gap-y-2 lg:flex-row w-full lg:gap-x-4">

          <div className="flex flex-col w-full">
                <ProductLable inputName="Назва товару" className="required flex flex-row" htmlFor="productName" >    
                 </ProductLable>
                <ProductField
                        type="text"
                        id="productName"
                        register={register(
                            "productName"
                        )}
            />
            <p className="text-xs mt-1">Максимум 30 символів</p>
                    {errors.productName &&
                        errors.productName
                            .message && (
                            <span className="text-red">
                                {errors.productName.message.toString()}
                            </span>
                        )}
          </div>
          <div className="flex flex-col w-full">
          <ProductLable inputName="Категорія товару" className="required flex flex-row" htmlFor="category">
            </ProductLable>
            <Categories
                control={control}
                register={register('category')}
                id="category"
            />
            {errors.category &&
                        errors.category
                            .message && (
                            <span className="text-red">
                                {errors.category.message.toString()}
                            </span>
                        )}
                    </div>
                    
          </div>
          <AddFoto setValue={setValue} errors={errors} />
         
         
          <div className="flex flex-col">
            <ProductLable inputName="Опис товару" htmlFor="productDescription" className="required flex flex-row"></ProductLable>
            <textarea
              id="productDescription"
                        className="bg-transparent border border-formColor rounded-2xl px-2 py-3"
                        name="description"
                        placeholder="Опишіть у подробицях Ваш товар"
                        cols={30}
                        rows={10}
                        {...register(
                            "productDescription"
              )}></textarea>
            <p className="text-xs mt-1">Максимум 200 символів</p>
                    {errors.productDescription &&
                        errors.productDescription
                            .message && (
                            <span className="text-red">
                                {errors.productDescription.message.toString()}
                            </span>
                        )}
                </div>
                <div className="lg:flex lg:w-full lg:items-end lg:gap-x-7">
                <div className="flex flex-col lg:w-full">
                <ProductLable inputName="Ціна за 1 одиницю товару" htmlFor="productPrice" className="required flex flex-row lg:w-full"> </ProductLable>
            <ProductField
              id="productPrice"
                        type="number"
                        register={register(
                            "productPrice"
                        )}
            />
             {errors.productPrice &&
                        errors.productPrice
                            .message && (
                            <span className="text-red">
                                {errors.productPrice.message.toString()}
                            </span>
                        )}
           
                    </div>
                    <div className="lg:w-full" >
                <Condition
                    register={register(
                        "productType"
                    )}

          />
          {errors.productType &&
                        errors.productType
                            .message && (
                            <span className="text-red">
                                {errors.productType.message.toString()}
                            </span>
                            )}
                        </div>
                </div>
                <h3 className="required">Контактні дані</h3>
                <div className="flex flex-col gap-y-2 lg:grid lg:grid-cols-2 lg:gap-x-7">
                   
                    <ProductLable
                        inputName="Контактна особа"
                        className="text-xs">
                         <ProductField
                            type="text"
                            register={register(
                                "sellerName"
                            )}
                        />
            </ProductLable>
            {errors.sellerName &&
                        errors.sellerName
                            .message && (
                            <span className="text-red">
                                {errors.sellerName.message.toString()}
                            </span>
                        )}
                    <Controller
                        name="sellerPhoneNumber"
                       
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <ProductLable inputName="Номер телефону" className="text-xs">
                                <InputMask
                                   required  
                                    className="bg-transparent border border-formColor rounded-2xl h-[36px] px-2 py-3 lg:h-[57px]"
                                    {...field}
                                    mask="+38(099)999-99-99"
                                    placeholder="+38(0__)___-__-__"
                                />
                            </ProductLable>
                        )}
            />
            {errors.sellerPhoneNumber &&
              errors.sellerPhoneNumber
                  .message && (
                  <span className="text-red">
                      {errors.sellerPhoneNumber.message.toString()}
                  </span>
              )}
            
                    <ProductLable
                        inputName="Ел. пошта"
                        className="text-xs">
                        <ProductField
                            type="mail"
                            register={register(
                                "sellerEmail"
                            )}
                            onBlur={() =>
                                trigger(
                                    "sellerEmail"
                                )
                            }
                        />
                        {errors.sellerEmail &&
                            errors.sellerEmail
                                .message && (
                                <span className="text-red">
                                    {errors.sellerEmail.message.toString()}
                                </span>
                            )}
                    </ProductLable> 
                    <ProductLable
                        inputName="Місцезнаходження товару"
                        className="text-xs">
                        <ProductField
                            type="text"
                            register={register(
                                "location"
                            )}
                        />
            </ProductLable>
            {errors.location &&
                        errors.location
                            .message && (
                            <span className="text-red">
                                {errors.location.message.toString()}
                            </span>
                        )}
          </div>
          <div className="mx-auto md:mx-0 my-4 md:my-10">
          <p className="text-xs md:text-xl text-center md:text-start">Ваше оголошення буде активне протягом 30 днів. Ви завжди можете його оновити в будь-який час.</p>
          </div>
          <div className="flex flex-col gap-3 w-[304px] mx-auto md:mx-0 lg:flex-row lg:w-full lg:justify-center">
          <Link href={'/preview'} className="text-center text-white py-3 px-7 min-w-[140px] rounded-xl bg-diamond-gradient lg:w-[456px]"
          >
            Попередній перегляд
          </Link>
                <button
                    disabled={isSubmitting}
                    className={`text-center text-white py-3 px-7 min-w-[140px] rounded-xl lg:w-[456px] ${
                        isSubmitting
                            ? "bg-disabled cursor-not-allowed"
                            : "bg-eggPlant"
                    }`}>
                    {isSubmitting
                        ? "Публікується"
                        : "Опублікувати"}
            </button>
            </div>
            </form>
        </>
    );
};
