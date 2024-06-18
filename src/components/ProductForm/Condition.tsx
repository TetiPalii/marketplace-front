// import { UseFormRegisterReturn } from "react-hook-form";
// import React, { useState } from 'react';
// type RegisterFunction = UseFormRegisterReturn<string>;

// interface ComponentProps {
//   register?: RegisterFunction;
//   type?: string;
//   id?: string;
//   list?: string;
// }
// export const Condition: React.FC<ComponentProps> = ({ register }) => {
//   const [selectedOption, setSelectedOption] = useState<string>('');

//   const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     console.log()
//     setSelectedOption(event.target.value);
//   };
//   return (
//     <>
//       <ul className="flex flex-col sm:flex-row gap-4 justify-center mt-4 mb-4 w-full">
//         <li className="w-full">
//           <input
//             type="radio"
//             id="used"
            
//             value="used"
//             className="peer hidden"
//             required
//             {...register}
//             checked={selectedOption === 'used'}
//           onChange={handleOptionChange}
//           />
//           <label
//             htmlFor="used"
//             className="block text-center py-3 px-16 bg-transparent border border-eggPlant rounded-xl 
//               cursor-pointer peer-checked:bg-eggPlant peer-checked:text-white"
//           >
//             Вживане
//           </label>
//         </li>
//         <li className="w-full">
//           <input
//             {...register}
//             type="radio"
//             id="new"
            
//             value="new"
//             className="peer hidden"
//             checked={selectedOption === 'new'}
//           onChange={handleOptionChange}
//           />
//           <label
//             htmlFor="new"
//             className="py-3 px-16 text-center block bg-transparent border border-eggPlant 
//               rounded-xl cursor-pointer
//                peer-checked:bg-eggPlant peer-checked:text-white"
//           >
//             Нове
//           </label>
//         </li>
//       </ul>
//     </>
//   );
// };
import { UseFormRegisterReturn } from "react-hook-form";

type RegisterFunction = UseFormRegisterReturn<string>;

interface ComponentProps {
  register?: RegisterFunction;
  type?: string;
  id?: string;
  list?: string;
}
export const Condition: React.FC<ComponentProps> = ({ register }) => {
  return (
    <>
      <ul className="flex justify-center mt-4 mb-2  gap-x-4 w-full">
        <li className="w-full">
          <input
            type="radio"
            id="used"
            name="productType"
            value="used"
            className="peer hidden"
            required
            {...register}
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
            {...register}
            type="radio"
            id="new"
            name="productType"
            value="new"
            className="peer hidden"
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
      </ul>
    </>
  );
};
