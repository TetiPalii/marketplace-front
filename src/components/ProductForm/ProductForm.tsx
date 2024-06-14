"use client";
import { useSWRConfig } from "swr";
import {
    Controller,
    useForm,
} from "react-hook-form";
import { InputMask } from "primereact/inputmask";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Categories } from "./Categories";
import { ProductField } from "./ProductField";
import { ProductLable } from "./ProductLable";
import { Condition } from "./Condition";
import { createProduct } from "@/actions/createProduct";
import { useEffect} from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/store/hooks";
import { AddFoto } from "./AddFoto";



const productSchema = z.object({
    productName: z
        .string()
        .min(5, {
            message:
                "Назва товару має містити щонайменше 5 символів ",
        })
        .max(100, {
            message:
                "Назва товару має містити не більше 100 символів ",
        }),
    category: z.object({
        label: z.string(),
        value: z.string(),
    }),
    productType: z.string(),
    productPrice: z.string().min(1),
    productDescription: z
        .string()
        .min(5, {
            message:
                "Опис товару має містити щонайменше 5 символів",
        })
        .max(250, {
            message:
                "Опис товару має містити не більше 250 символів",
        }),
    sellerName: z.string().min(3).max(50),
    sellerPhoneNumber: z
        .string()
        .min(13,{message:"Це поле є обовʼязковим"})
        .max(17),
    sellerEmail: z
        .string()
        .email({
            message:
                "Будь-ласка введіть валідний адрес електронної пошти",
        })
        .min(1, "Це поле є обовʼязковим"),
    location: z.string().min(3).max(100),
    files: z
        .array(
            z
                .instanceof(File)
                .refine(
                    (file) =>
                        file.size <=
                        5 * 1024 * 1024,
                    {
                        message:
                            "Размер файла должен быть не более 5MB",
                    }
                )
                .refine(
                    (file) =>
                        [
                            "image/jpeg",
                            "image/png",
                        ].includes(file.type),
                    {
                        message:
                            "Файл должен бути изображением (JPEG/PNG)",
                    }
                )
        )
        .max(
            8,
            "Можна завантажити максимум 8 фото"
        ),
});

export type ProductSchema = z.infer<
    typeof productSchema
>;

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
  
    const token:string = useAppSelector((state) => {
     return state.user.user.token
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
            const newProductData =
                await createProduct(
                    formData,
                    mutate,token
                );

            console.log(newProductData);
        } catch (error) {
            console.log(error);
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
   
  }, [watchedFields]);

    return (
        <>
            <form
                onSubmit={onSubmit}
                className="flex flex-col gap-2">
                <h1 className="text-center text-2xl font-medium">
                    Створи оголошення
          </h1>
          <div className="flex flex-col">
                <ProductLable inputName="Назва товару" className="required flex flex-row" htmlFor="productName" >    
                 </ProductLable>
                <ProductField
                        type="text"
                        id="productName"
                        register={register(
                            "productName"
                        )}
                    />
                    {errors.productName &&
                        errors.productName
                            .message && (
                            <span className="text-red">
                                {errors.productName.message.toString()}
                            </span>
                        )}
          </div>
          <div className="flex flex-col">
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
               
          <AddFoto setValue={setValue} errors={errors} />

          <div className="flex flex-col">
                <ProductLable inputName="Ціна за 1 одиницю товару" htmlFor="productPrice" className="required flex flex-row"> </ProductLable>
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
                    {errors.productDescription &&
                        errors.productDescription
                            .message && (
                            <span className="text-red">
                                {errors.productDescription.message.toString()}
                            </span>
                        )}
                </div>
                
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
                <div>
                    <h3 className="required">Контактні дані</h3>
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
                            <ProductLable inputName="Номер телефону">
                                <InputMask
                                   required  
                                    className="bg-transparent border border-formColor rounded-2xl h-[36px] px-2 py-3"
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
            
                     {/* <ProductLable inputName="Номер телефону" className="text-xs">
            <ProductField type="phone" register={register("sellerPhoneNumber")} />
          </ProductLable>  */}
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

                <button
                    disabled={isSubmitting}
                    className={`text-center text-white py-3 px-7 min-w-[140px] rounded-xl  ${
                        isSubmitting
                            ? "bg-disabled cursor-not-allowed"
                            : "bg-eggPlant"
                    }`}>
                    {isSubmitting
                        ? "Публікується"
                        : "Опублікувати"}
                </button>
            </form>
        </>
    );
};
