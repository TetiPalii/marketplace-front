"use client";
import { useSWRConfig } from 'swr';
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Categories } from "./Categories";
import { ProductField } from "./ProductField";
import { ProductLable } from "./ProductLable";
import { Condition } from "./Condition";
import { createProduct } from "@/actions/createProduct";
import { useEffect, useState} from "react";
import { useRouter } from "next/navigation";
import Image from 'next/image';

const productSchema = z.object({
  productName: z.string().min(5,{message:"Назва товару має містити щонайменше 5 символів "}).max(100,{message:"Назва товару має містити не більше 100 символів "}),
  category: z.object({
    label: z.string(),
    value:z.string()
  }),
  productType:z.string(),
  productPrice: z.string().min(1),
  productDescription: z.string().min(5).max(250),
  sellerName: z.string().min(3).max(50),
  sellerPhoneNumber: z.string().regex(/^\+380\d{9}$/, {
    message: 'Телефон має містити +380 та 9 цифр',
  }).min(13).max(13),
  sellerEmail: z.string().email({message:"Будь-ласка введіть валідний адрес електронної пошти"}).min(1, "Це поле є обовʼязковим"),
  location: z.string().min(3).max(100),
  file: z.instanceof(File,{ message: 'Будь-ласка завантажте фото' }).refine((file) => !!file, { message: 'Будь-ласка завантажте фото' })
    .refine((file) => file.size <= 5 * 1024 * 1024, { message: 'Размер файла должен быть не более 5MB' })
    .refine((file) => ['image/jpeg', 'image/png'].includes(file.type), {
      message: 'Файл должен бути изображением (JPEG/PNG)',
    }),
  
});
export type ProductSchema = z.infer<typeof productSchema>;
// const defaultValues = {
//   productName: '',
//   productDescription: '',
//   productPrice: '',
//   category: {
//     value: '',
//     label:''
//   },
//   productType: '',
//   sellerName: '',
//   sellerPhoneNumber: '',
//   sellerEmail: '',
//   location: '',
 
// };

export const ProductForm = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
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
  } = useForm({resolver: zodResolver(productSchema),});

  const onSubmit = handleSubmit(async (data) => {
   
    const { productName,productPrice, productDescription,  productType, sellerName, sellerPhoneNumber, sellerEmail, location, category: { value: productCategory }, file} = data;
    
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
    
    const jsonProductData = JSON.stringify(productData);
    // localStorage.setItem('productForm', jsonProductData);
    const formData = new FormData();
    formData.append('request', new Blob([jsonProductData], { type: 'application/json' }));
    formData.append('files', file, file.name)
  
    try {
     
      const newProductData = await createProduct(formData, mutate)
    
      console.log(newProductData)
      
   } catch (error) {
      console.log(error)
    }
    
    router.push('/')
   
  });
  useEffect(() => {
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setPreview(null);
    }
  }, [selectedFile]);

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
      <form onSubmit={onSubmit} className="flex flex-col gap-2">
        <h1 className="text-center text-2xl font-medium">Створи оголошення</h1>
        <ProductLable inputName="Назва товару">
          <ProductField
            type="text"
            id="productName"
            register={register("productName")}
           
          />
          {errors.productName&& errors.productName.message &&(<span className="text-red">{errors.productName.message.toString()}</span> )}
        </ProductLable>
        <ProductLable inputName="Категорія товару">
          <Categories control={control} />
        </ProductLable>
       
        <ProductLable inputName="Фото" >
          <Controller
          name="file"
          control={control}
            render={({ field }) => (
              <div className='text-center w-[136px] h-[124px] border border-darkBlue rounded-xl overflow-hidden'>
                {preview ? (<div className='w-[136px] h-[124px] '>
                  <Image src={preview} width='136' height='124' alt="Preview" className="w-full h-full object-cover" /></div>) : <span className='text-sm my-auto'>Додати фото</span>}
               <input
              className="opacity-0 w-[150px] h-[130px] absolute top-80 left-1"
              type="file"
              onChange={(e) => {
                const file = e.target.files && e.target.files[0];
                if (file) {
                  field.onChange(file);
                  setSelectedFile(file);
                }
              }}
                />
                  
              </div>
           )} />
          {errors.file && errors.file.message && <span className='text-red'>
            {errors.file.message.toString()}</span>}
        </ProductLable>
        
        <ProductLable inputName="Ціна за 1 одиницю товару">
          <ProductField type="number" register={register("productPrice")} />
        </ProductLable>
        <ProductLable inputName="Опис товару">
          <textarea
            className="bg-transparent border border-formColor rounded-2xl px-2 py-3"
            name="description"
            cols={30}
            rows={10}
            {...register("productDescription")}
          ></textarea>
        </ProductLable>
        <Condition register={register("productType")}/>

        <div>
          <h3>Контактні дані</h3>
          <ProductLable inputName="Контактна особа" className="text-xs">
            <ProductField type="text" register={register("sellerName")} />
          </ProductLable>
          <ProductLable inputName="Номер телефону" className="text-xs">
            <ProductField type="phone" register={register("sellerPhoneNumber")} />
          </ProductLable>
          <ProductLable inputName="Ел. пошта" className="text-xs">
            <ProductField type="mail" register={register("sellerEmail")} onBlur={() => trigger('sellerEmail')}/>
            {errors.sellerEmail&& errors.sellerEmail.message &&(<span className="text-red">{errors.sellerEmail.message.toString()}</span> )}
          </ProductLable>
          <ProductLable inputName="Місцезнаходження товару" className="text-xs">
            <ProductField type="text" register={register("location")} />
          </ProductLable>
        </div>

        <button
         disabled={isSubmitting}
          className={`text-center text-white py-3 px-7 min-w-[140px] rounded-xl  ${isSubmitting ? 'bg-disabled cursor-not-allowed':'bg-eggPlant'}`}
        >
         {isSubmitting?'Публікується': 'Опублікувати'}
        </button>
      </form>
    </>
  );
};
