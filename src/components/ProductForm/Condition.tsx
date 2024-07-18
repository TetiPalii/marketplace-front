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
      <ul className="flex justify-between gap-x-2 my-4 lg:my-0 w-full">
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
            className="text-base block text-center py-3 lg:py-[17px] bg-transparent border border-eggPlant rounded-xl 
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
            className=" text-base py-3 lg:py-[17px] text-center block bg-transparent border border-eggPlant 
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
