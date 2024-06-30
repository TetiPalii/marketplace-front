import { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addFile } from "@/store/features/product/productSlice";
import { ProductLable } from "./ProductLable";

interface AddFotoProps {
  errors: any; 
  setValue: (name: string, value: any) => void; 
};

function base64ToFile(base64String: string, fileName: string, mimeType: string): File {
  const base64Data = base64String.replace(/^data:.*;base64,/, '');
  const byteCharacters = atob(base64Data);
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);
  const blob = new Blob([byteArray], { type: mimeType });
  return new File([blob], fileName, { type: mimeType });
}

export const AddFoto: React.FC<AddFotoProps> = ({ errors, setValue }) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]); 
  const [imgDataUrl, setImgDataUrl] = useState<string[]>([]);
  const dispatch = useAppDispatch();
  const storedUrl = useAppSelector(state => state.product.productFiles);
 
//   useEffect(() => {
//     console.log('useefect []')
//     if (storedUrl) {
      
//       const files = storedUrl.map((url, index) => base64ToFile(url, `file-${index}.jpeg`, 'image/jpeg'));

//       setSelectedFiles([...selectedFiles,...files]);
//       setImgDataUrl([...imgDataUrl,...storedUrl])
     
//     }
//   }, []);

  useEffect(() => {
    console.log('[selectedFiles]')
    console.log(selectedFiles)
    if (selectedFiles.length) {
      // setValue('files', selectedFiles);
      selectedFiles.map((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImgDataUrl(prevState => [...prevState, reader.result as string]);
      }
      reader.readAsDataURL(file)
    });}
    
  }, [selectedFiles]);

//  /**dispatches img url to redux state */
//   useEffect(() => {
//     if (imgDataUrl.length) {
//       console.log('[imgDataUrl]',imgDataUrl);
//       dispatch(addFile(imgDataUrl));
//     }
//   }, [imgDataUrl]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('onChange')
    const newFiles = Array.from(e.target.files || []); 
    if (selectedFiles.length + newFiles.length <= 8) { 
      const updatedFiles = [...selectedFiles, ...newFiles];
      setSelectedFiles(updatedFiles); 
      setValue("files", selectedFiles);
    } else {
      alert("Максимум 8 фото!"); 
    }
  };

  const handleDeletePhoto = (index: number) => {
    console.log('onDelete')
    const updatedFiles = [...selectedFiles];
    updatedFiles.splice(index, 1); 
    setSelectedFiles(updatedFiles);
    setImgDataUrl(imgDataUrl.filter((_, i) => i !== index)); 
    dispatch(addFile(imgDataUrl.filter((_, i) => i !== index)))
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
          {imgDataUrl.map((url, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-0 pb-[100%]">
                <div className="absolute inset-0 ">
                  <Image
                    src={url}
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
          {Array.from({ length: 8 - imgDataUrl.length }).map((_, index) => (
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
        {imgDataUrl.map((url, index) => (
          <div key={index} className="relative w-full">
            <div className="absolute inset-0">
              <Image
                src={url}
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

        {Array.from({ length: 8 - imgDataUrl.length }).map((_, index) => (
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
