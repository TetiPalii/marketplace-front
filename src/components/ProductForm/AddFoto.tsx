import { use, useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { useAppDispatch } from "@/store/hooks";
import { addFile } from "@/store/features/product/productSlice";
import { ProductLable } from "./ProductLable";

interface AddFotoProps {
  errors: any; 
  setValue: (name: string, value: any) => void; 
}

export const AddFoto: React.FC<AddFotoProps> = ({ errors, setValue }) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]); 
  const [previews, setPreviews] = useState<string[]>([]);
  const [imgUrl, setImgUrl] = useState<string[]>([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const localFiles = localStorage.getItem('images');
    if (localFiles) {
      
      const parsedFiles = JSON.parse(localFiles)
     setPreviews(parsedFiles)
   
     }
  },[])

  /** adds previews` url */
  useEffect(() => {
    if (selectedFiles.length) {
      const newPreviews = selectedFiles.map((file) => URL.createObjectURL(file));
      setPreviews(newPreviews);
     localStorage.setItem('images',JSON.stringify(newPreviews))
    } else {
      setPreviews([]);
    }
    
    return () => {
      previews.forEach(preview => URL.revokeObjectURL(preview));
    };
  }, [selectedFiles]);
  
 
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = Array.from(e.target.files || []); 
    if (selectedFiles.length + newFiles.length <= 8) { 
      const updatedFiles = [...selectedFiles, ...newFiles];
      setSelectedFiles(updatedFiles); 
      setValue("files", updatedFiles);
    } else {
      alert("Максимум 8 фото!"); 
    }
  };
/** creates an array of img url out of files */ 
  useEffect(() => {
    selectedFiles.map((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImgUrl(prevState => [...prevState, reader.result as string]);
      }
      reader.readAsDataURL(file)
    })
  }, [selectedFiles]);

/**dispatches img url to redux state */
  useEffect(() => {
    if (imgUrl.length) {
      dispatch(addFile(imgUrl))
    }
  }, [imgUrl]);
  
  const handleDeletePhoto = (index: number) => {
    const updatedFiles = [...selectedFiles];
    updatedFiles.splice(index, 1); 
    setSelectedFiles(updatedFiles);
    setPreviews(previews.filter((_, i) => i !== index)); 
  };

  return (
    <div className="flex flex-col z-auto">
      <ProductLable inputName="Фото" /> 
      <div className="w-full block md:hidden">
        <Swiper
          spaceBetween={6}
          slidesPerView={3} 
          pagination={{ clickable: true }}
          className="w-full z-auto"
        >
          {previews.map((preview, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-0 pb-[100%]">
                <div className="absolute inset-0 ">
                  <Image
                    src={preview}
                    layout="fill"
                    objectFit="cover"
                    alt="Preview"
                    className="rounded-xl"
                  />
                  <button
                    className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                    onClick={() => handleDeletePhoto(index)}
                  >
                    <span className="text-2xl">&times;</span>
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
                
          {/* container for new adding new fotos mobile screens */}
          {Array.from({ length: 8 - previews.length }).map((_, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-0 pb-[100%] z-auto">
                <div className="absolute inset-0 flex justify-center items-center text-center border border-darkBlue rounded-xl z-auto">
                  <span className="text-sm">Додати фото</span>
                  <input
                    className="opacity-0 w-full h-full absolute top-0 left-0 z-auto"
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="hidden md:grid md:grid-cols-4 
      md:h-[377px] md:gap-x-2 md:gap-y-4 lg:flex lg:h-[155px] lg:gap-x-2">
        {previews.map((preview, index) => (
          <div key={index} className="relative w-full">
            <div className="absolute inset-0">
              <Image
                src={preview}
                layout="fill"
                objectFit="cover"
                alt="Preview"
                className="rounded-xl"
              />
              <button
                className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                onClick={() => handleDeletePhoto(index)}
              >
                <span className="text-2xl">&times;</span>
              </button>
            </div>
          </div>
        ))}

        {/* Container for adding new fotos*/}
        {Array.from({ length: 8 - previews.length }).map((_, index) => (
          <div key={index} className="relative w-full z-auto">
            <div className="absolute inset-0 flex justify-center items-center text-center border border-darkBlue rounded-xl z-0">
              <span className="text-sm ">Додати фото</span>
              <input
                className="opacity-0 w-full h-full absolute top-0 left-0"
                type="file"
                multiple
                accept="image/*"
                onChange={handleFileChange}
              />
            </div>
          </div>
        ))}
      </div>
      <p className="text-xs mt-1">Перше фото буде на обкладинці оголошення</p>

      
      {errors.files && errors.files.message && (
        <span className="text-red">{errors.files.message.toString()}</span>
      )}
    </div>
  );
};

