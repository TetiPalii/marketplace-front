"use client";

import React, { useEffect, useState } from "react";
import { useMediaQuery } from 'react-responsive';
import {Controller} from 'react-hook-form';
import Select, { CSSObjectWithLabel, GroupBase, StylesConfig } from "react-select";
import { getCategories } from "@/actions/getCategories";

// const selectStyles: StylesConfig<unknown, boolean, GroupBase<unknown>> = {
//   control: (baseStyles: CSSObjectWithLabel) => ({
//     ...baseStyles,
//     borderColor: "#0D0D0D",
//     backgroundColor: "transparent",
//     borderRadius: 16,
//   }),
//   menu: (baseStyles: CSSObjectWithLabel) => ({
//     ...baseStyles,
//     zIndex: 0,
//   }),
// };
const selectStyles: StylesConfig<unknown, boolean, GroupBase<unknown>> = {
  control: (baseStyles: CSSObjectWithLabel) => ({
    ...baseStyles,
    borderColor: "#0D0D0D",
    backgroundColor: "transparent",
    borderRadius: 20,
  }),
  menu: (baseStyles: CSSObjectWithLabel) => ({
    ...baseStyles,
    zIndex: 1,
  }),
  option: (baseStyles: CSSObjectWithLabel, { isFocused }) => ({
    ...baseStyles,
    border: "1px solid #990078", // Рамка для каждого элемента выпадающего списка
    backgroundColor: isFocused ? "#E5E5E5" : "white", // Фон для активного элемента
    ':active': {
      ...baseStyles[':active'],
      backgroundColor: '#B0B0B0', // Фон при клике на элемент
    },
  }),
};


export const Categories = ({ control, register, id}) => {
  const [categoriesList, setCategoriesList] = useState(null);
  const isDesktopScreen = useMediaQuery({
    query: '(min-width:1024px'
  });

  useEffect(() => {
    getCategories().then((res) => {
      setCategoriesList(res);
    });
  }, []);

  const categoriesOptions = () => {
    if (categoriesList) {
      return categoriesList.map(({ categoryName, nameUkr }) => {
        return {
          value: categoryName,
          label: nameUkr,
         
        };
      });
    }
  };

  // const dynamicStyles = {
  //   ...selectStyles,
  //   control: (baseStyles: CSSObjectWithLabel) => ({
  //     ...baseStyles,
  //     borderColor: "#0D0D0D",
  //     backgroundColor: "transparent",
  //     borderRadius: 16,
  //     height: isDesktopScreen ? '57px' : 'auto',
  //     zIndex: 0,
  //   }),
  //   menu: (baseStyles: CSSObjectWithLabel) => ({
  //     ...baseStyles,
  //     zIndex: 5,
  //     borderRadius: '20px',
      
    
  //   }),
  // };
  const dynamicStyles = {
    ...selectStyles,
    control: (baseStyles: CSSObjectWithLabel) => ({
      ...baseStyles,
      borderColor: "#0D0D0D",
      backgroundColor: "transparent",
      borderRadius: 20,
      height: isDesktopScreen ? '57px' : 'auto',
    }),
  };



  return (
    <Controller  name='category' control={control} render={({ field })=>
      <Select
    
        {...field}
      styles={dynamicStyles}
        options={categoriesOptions()} 
  />}
  />
  );
};
