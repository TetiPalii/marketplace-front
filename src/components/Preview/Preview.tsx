'use client'

import { useAppSelector } from "@/store/hooks";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ProductSchema } from "../ProductForm/schema";
import { SwiperSlide,Swiper } from "swiper/react";
import Image from "next/image";
import { Wrapper } from "../Wrapper/Wrapper";

export const Preview = () => {
    const [formData, setFormData] = useState<ProductSchema|null>(null);
   const [previewImg, setPreviewImg] = useState(null)
    const router = useRouter();
    const files = useAppSelector(state => state.product.productFiles);
    
    useEffect(() => {
        const productPreview = localStorage.getItem('productForm')
        if (productPreview) {
            const parsedData:ProductSchema = JSON.parse(productPreview);
            setFormData(parsedData);
        }
        setPreviewImg(files)
    }, []);

 
   const handleBackClick = () => {
    router.push('/add-new-product'); 
   };
    
  return (
      <section className="w-full px-4 py-5 h-full md:px-16">
          
          <Wrapper>
              {formData &&
                  <h2 className="text-center text-2xl font-medium">
                      {formData.productName}
                   
                  </h2>} 
              <Swiper spaceBetween={6} slidesPerView={3} pagination={{ clickable: true }} className="w-full z-auto">
              {previewImg ? previewImg.map((file:string, index:number) => {
                  return <SwiperSlide key={index}>
                      <div className="relative w-full h-0 pb-[100%]">
                          <div className="absolute inset-0">
                              <Image src={file} width='250' height='250' alt="Foto preview" />
                              </div>
                          </div>
                      </SwiperSlide>
              }) : <p>
                          'Додайте будь-ласка фото'
                  </p>}
              </Swiper>
              <button 
        onClick={handleBackClick} 
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg"
      >
        Назад
      </button>
</Wrapper>
    </section>
  );
}