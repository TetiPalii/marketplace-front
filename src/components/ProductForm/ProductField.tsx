import { useEffect, useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

type RegisterFunction = UseFormRegisterReturn<string>;

interface ComponentProps {
  register?: RegisterFunction;
  type?: string;
  id?: string;
  list?: string;
  onChange?: any;
  onBlur?:()=>void
}

export const ProductField: React.FC<ComponentProps> = ({
  type,
  list,
  register,
  onBlur
  
}) => {
 
  // const localValue = localStorage.setItem('fieldValue', value)
  // useEffect(()=>{
  //   const localValue = localStorage.getItem('fieldValue')
  //   console.log(localValue)
  //   if (localValue) {
  //     setValue(localValue)
  //   }
  // },[])
  return (
    <input
      type={type}
      className="bg-transparent border border-formColor rounded-2xl h-[36px] px-2 py-3"
      {...register}
      list={list}
      onBlur={onBlur}
      
     
    />
  );
};
