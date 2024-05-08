import { UseFormRegisterReturn} from 'react-hook-form';

type RegisterFunction = UseFormRegisterReturn<string>;

interface ComponentProps {
    register?: RegisterFunction;
    type?: string,
    id?: string,
    list?: string,
  }

export const ProductField : React.FC<ComponentProps> = ({ type, list, register }) => {
    return <input type={type} className="bg-transparent border border-formColor rounded-2xl h-[36px] px-2 py-3" {...register} list={list} />

}