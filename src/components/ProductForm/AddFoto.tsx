import { useEffect, useState } from "react";
import { ProductLable } from "./ProductLable";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

interface AddFotoProps {
  errors: any; 
  setValue: (name: string, value: any) => void; 
}

export const AddFoto: React.FC<AddFotoProps> = ({ errors, setValue }) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]); 
  const [previews, setPreviews] = useState<string[]>([]);

  
  useEffect(() => {
    if (selectedFiles.length) {
      const newPreviews = selectedFiles.map((file) => URL.createObjectURL(file));
      setPreviews(newPreviews);
    } else {
      setPreviews([]);
    }

    return () => {
      previews.forEach(preview => URL.revokeObjectURL(preview));
    };
  }, [selectedFiles]);

 
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = Array.from(e.target.files || []); // 
    if (selectedFiles.length + newFiles.length <= 8) { // 
      const updatedFiles = [...selectedFiles, ...newFiles];
      setSelectedFiles(updatedFiles); 
      setValue("files", updatedFiles); 
    } else {
      alert("Максимум 8 фото!"); 
    }
  };

  
  const handleDeletePhoto = (index: number) => {
    const updatedFiles = [...selectedFiles];
    updatedFiles.splice(index, 1); 
    setSelectedFiles(updatedFiles);
    setPreviews(previews.filter((_, i) => i !== index)); 
  };

  return (
    <div className="flex flex-col">
      <ProductLable inputName="Фото" /> 
      
      
      <div className="w-full block md:hidden">
        <Swiper
          spaceBetween={6}
          slidesPerView={3} 
          pagination={{ clickable: true }}
          className="w-full"
        >
          {previews.map((preview, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-0 pb-[100%]">
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
            </SwiperSlide>
          ))}
                  

          {/* Контейнер для добавления новых фотографий */}
          {Array.from({ length: 8 - previews.length }).map((_, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-0 pb-[100%]">
                <div className="absolute inset-0 flex justify-center items-center text-center border border-darkBlue rounded-xl">
                  <span className="text-sm">Додати фото</span>
                  <input
                    className="opacity-0 w-full h-full absolute top-0 left-0"
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
      <div className="hidden lg:grid grid-cols-1 md:grid-cols-4 xl:grid-cols-8 gap-4">
        {previews.map((preview, index) => (
          <div key={index} className="relative w-full h-0 pb-[100%]">
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

        {/* Контейнер для добавления новых фотографий */}
        {Array.from({ length: 8 - previews.length }).map((_, index) => (
          <div key={index} className="relative w-full h-0 pb-[100%]">
            <div className="absolute inset-0 flex justify-center items-center text-center border border-darkBlue rounded-xl">
              <span className="text-sm">Додати фото</span>
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
      <p className="text-xs">Перше фото буде на обкладинці оголошення</p>

      
      {errors.files && errors.files.message && (
        <span className="text-red">{errors.files.message.toString()}</span>
      )}
    </div>
  );
};

// import { useEffect, useState } from "react";
// import { ProductLable } from "./ProductLable";
// import Image from "next/image";



// export const AddFoto = ({errors, setValue}) => {
//     const [selectedFiles, setSelectedFiles] =
//         useState([]);
//     const [previews, setPreviews] = useState<
//         string[]
//     >([]);
//     useEffect(() => {
//         if (selectedFiles.length) {
//             const newPreviews = selectedFiles.map(
//                 (file) =>
//                     URL.createObjectURL(file)
//             );
//             setPreviews(newPreviews);
//         } else {
//             setPreviews([]);
//         }
//     }, [selectedFiles]);


//   const handleFileChange = (e: { target: { files: Iterable<unknown> | ArrayLike<unknown>; }; }) => {
//         const newFiles = Array.from(
//             e.target.files
//         );
//         if (
//             selectedFiles.length +
//                 newFiles.length <=
//             8
//         ) {
//             const updatedFiles = [
//                 ...selectedFiles,
//                 ...newFiles,
//             ];
//             setSelectedFiles(updatedFiles);
//             setValue("files", updatedFiles);
//         } else {
//             alert("Максимум 8 фото!");
//         }
//     };

//     const handleDeletePhoto = (index) => {
//         const updatedFiles = [...selectedFiles];
//         updatedFiles.splice(index, 1);
//         setSelectedFiles(updatedFiles);
//         setPreviews(
//             previews.filter((_, i) => i !== index)
//         );
//     };
//     return <div className="flex flex-col">
//     <ProductLable inputName="Фото" className="required felx flex-row"/>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-8 gap-4">
//             {previews.map(
//                 (preview, index) => (
//                     <div
//                         key={index}
//                         className="relative w-full h-0 pb-[100%]">
//                         <div className="absolute inset-0">
//                             <Image
//                                 src={
//                                     preview
//                                 }
//                                 layout="fill"
//                                 objectFit="cover"
//                                 alt="Preview"
//                                 className="rounded-xl"
//                             />
//                             <button
//                                 className="absolute  top-2 right-2 bg-red-500 text-red rounded-full w-6 h-6 flex items-center justify-center"
//                                 onClick={
//                                     handleDeletePhoto
//                                 }>
//                                 <span className="text-2xl">
//                                     &times;
//                                 </span>
//                             </button>
//                         </div>
//                     </div>
//                 )
//             )}

//             {Array.from({
//                 length:
//                     8 -
//                     previews.length,
//             }).map((_, index) => (
//                 <div
//                     key={index}
//                     className="relative w-full h-0 pb-[100%]">
//                     <div className="absolute inset-0 flex justify-center items-center text-center border border-darkBlue rounded-xl">
//                         <span className="text-sm">
//                             Додати
//                             фото
//                         </span>
//                   <input
                    
//                             className="opacity-0 w-full h-full absolute top-0 left-0"
//                             type="file"
//                             multiple
//                             accept="image/*"
//                             onChange={
//                                 handleFileChange
//                             }
//                         />
//                     </div>
//                 </div>
//             ))}
//         </div>
//         <p className="text-xs">Перше фото буде на обкладинці оголошення</p>
//         {errors.files &&
//             errors.files
//                 .message && (
//                 <span className="text-red">
//                     {errors.files.message.toString()}
//                 </span>
//             )}
// </div>
    
// }