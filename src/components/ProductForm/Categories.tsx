"use client";

import React, { useEffect, useState } from "react";
import {Controller} from 'react-hook-form';
import Select, { CSSObjectWithLabel } from "react-select";
import { nanoid } from "nanoid";
import { ProductField } from "./ProductField";
import { getCategories } from "@/actions/getCategories";

const selectStyles = {
  control: (baseStyles:CSSObjectWithLabel) => ({
    ...baseStyles,
    zIndex:1,
  })
}

export const Categories = ({ control, register, id}) => {
  const [categoriesList, setCategoriesList] = useState(null);

  useEffect(() => {
    getCategories().then((res) => {
      setCategoriesList(res);
    });
  }, []);

  const categoriesOptions = () => {
    // console.log(categoriesList)
    if (categoriesList) {
      return categoriesList.map(({ categoryName, nameUkr }) => {
        return {
          value: categoryName,
          label: nameUkr,
         
        };
      });
    }
  };


  return (
    <Controller  name='category' control={control} render={({ field })=>
      <Select
        {...field}
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          borderColor: "#0D0D0D",

          backgroundColor: "transparent",
          borderRadius: 16,
        
        }),
      }}
      options={categoriesOptions()} 
    
       
        
  />}
  />
  );
};
/* */ 