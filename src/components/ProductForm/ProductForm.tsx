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
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from 'next/image';
import { useAppSelector } from "@/store/hooks";



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
        .min(13)
        .max(13),
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

    const [selectedFiles, setSelectedFiles] =
        useState([]);
    const [previews, setPreviews] = useState<
        string[]
    >([]);
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
  } = useForm({resolver: zodResolver(productSchema)});
    const token:string = useAppSelector((state) => {
     return state.user.user.token
 })

 
const onSubmit = handleSubmit(
    async (data) => {
        console.log(data)
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



    useEffect(() => {
        if (selectedFiles.length) {
            const newPreviews = selectedFiles.map(
                (file) =>
                    URL.createObjectURL(file)
            );
            setPreviews(newPreviews);
        } else {
            setPreviews([]);
        }
    }, [selectedFiles]);


    const handleFileChange = (e) => {
        const newFiles = Array.from(
            e.target.files
        );
        if (
            selectedFiles.length +
                newFiles.length <=
            8
        ) {
            const updatedFiles = [
                ...selectedFiles,
                ...newFiles,
            ];
            setSelectedFiles(updatedFiles);
            setValue("files", updatedFiles);
        } else {
            alert("Максимум 8 фото!");
        }
    };

    const handleDeletePhoto = (index) => {
        const updatedFiles = [...selectedFiles];
        updatedFiles.splice(index, 1);
        setSelectedFiles(updatedFiles);
        setPreviews(
            previews.filter((_, i) => i !== index)
        );
    };

    return (
        <>
            <form
                onSubmit={onSubmit}
                className="flex flex-col gap-2">
                <h1 className="text-center text-2xl font-medium">
                    Створи оголошення
                </h1>
                <ProductLable inputName="Назва товару">
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
                </ProductLable>
                <ProductLable inputName="Категорія товару">
                    <Categories
                        control={control}
                        register={register('category')}
                    />
                </ProductLable>

                <ProductLable inputName="Фото">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-8 gap-4">
                        {previews.map(
                            (preview, index) => (
                                <div
                                    key={index}
                                    className="relative w-full h-0 pb-[100%]">
                                    <div className="absolute inset-0">
                                        <Image
                                            src={
                                                preview
                                            }
                                            layout="fill"
                                            objectFit="cover"
                                            alt="Preview"
                                            className="rounded-xl"
                                        />
                                        <button
                                            className="absolute  top-2 right-2 bg-red-500 text-red rounded-full w-6 h-6 flex items-center justify-center"
                                            onClick={
                                                handleDeletePhoto
                                            }>
                                            <span className="text-2xl">
                                                &times;
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            )
                        )}

                        {Array.from({
                            length:
                                8 -
                                previews.length,
                        }).map((_, index) => (
                            <div
                                key={index}
                                className="relative w-full h-0 pb-[100%]">
                                <div className="absolute inset-0 flex justify-center items-center text-center border border-darkBlue rounded-xl">
                                    <span className="text-sm">
                                        Додати
                                        фото
                                    </span>
                                    <input
                                        className="opacity-0 w-full h-full absolute top-0 left-0"
                                        type="file"
                                        multiple
                                        accept="image/*"
                                        onChange={
                                            handleFileChange
                                        }
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </ProductLable>

                <ProductLable inputName="Ціна за 1 одиницю товару">
                    <ProductField
                        type="number"
                        register={register(
                            "productPrice"
                        )}
                    />
                </ProductLable>
                <ProductLable inputName="Опис товару">
                    <textarea
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
                </ProductLable>
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
           {/* <ul className="flex flex-col sm:flex-row gap-4 justify-center mt-4 mb-4 w-full">
        <li className="w-full">
          <input
            type="radio"
            id="used"
            name="productType"
            value="used"
            className="peer hidden"
            required
            {...register("productType")}
            checked={selectedOption === 'used'}
          onChange={handleOptionChange}
          />
          <label
            htmlFor="used"
            className="block text-center py-3 px-16 bg-transparent border border-eggPlant rounded-xl 
              cursor-pointer peer-checked:bg-eggPlant peer-checked:text-white"
          >
            Вживане
          </label>
        </li>
        <li className="w-full">
          <input
            {...register("productType")}
            type="radio"
            id="new"
            name="productType"
            value="new"
            className="peer hidden"
            checked={selectedOption === 'new'}
          onChange={handleOptionChange}
          />
          <label
            htmlFor="new"
            className="py-3 px-16 text-center block bg-transparent border border-eggPlant 
              rounded-xl cursor-pointer
               peer-checked:bg-eggPlant peer-checked:text-white"
          >
            Нове
          </label>
        </li>
      </ul> */}

                <div>
                    <h3>Контактні дані</h3>
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
                    {/* <Controller
                        name="sellerPhoneNumber"
                       
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <ProductLable inputName="Номер телефону">
                                <InputMask
                                     {...register('sellerPhoneNumber')}
                                    className="bg-transparent border border-formColor rounded-2xl h-[36px] px-2 py-3"
                                    {...field}
                                    mask="+38(099)999-99-99"
                                    placeholder="+38(0__)___-__-__"
                                />
                            </ProductLable>
                        )}
                    /> */}
                     <ProductLable inputName="Номер телефону" className="text-xs">
            <ProductField type="phone" register={register("sellerPhoneNumber")} />
          </ProductLable> 
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
