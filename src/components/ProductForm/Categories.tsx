"use client";

import React, { useEffect, useState } from "react";
import { useMediaQuery } from 'react-responsive';
import {Controller} from 'react-hook-form';
import Select, {components, CSSObjectWithLabel, GroupBase, StylesConfig } from "react-select";
import { getCategories } from "@/actions/getCategories";

const selectStyles: StylesConfig<unknown, boolean, GroupBase<unknown>> = {
  control: (baseStyles: CSSObjectWithLabel) => ({
    ...baseStyles,
    backgroundColor: "transparent",
    borderRadius: 20,
    zIndex: 5,
  }),
  menu: (baseStyles: CSSObjectWithLabel) => ({
    ...baseStyles,
    zIndex: 5,
    borderRadius: 20,
    
    
  }),
  option: (baseStyles: CSSObjectWithLabel, { isFocused }) => ({
    ...baseStyles,
    borderBottom: "1px solid #990078",
    borderRadius: 8,
  }),
  placeholder: (baseStyles: CSSObjectWithLabel) => ({
    ...baseStyles,
    color: '#161C2A',
    
  }),
  input: (baseStyles: CSSObjectWithLabel) => ({
    ...baseStyles,
    zIndex:0,
  }),
  indicatorSeparator: (baseStyles: CSSObjectWithLabel) => ({
    ...baseStyles,
    display: 'none', // Hide the vertical separator
  }),
};

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 8L10 13L15 8"
          stroke="#000000" // Change this to the desired color
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
     </components.DropdownIndicator>
   )
 }
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
  const formatOptionLabel = ({ label }) => {
    return <div className="text-center">
    {label}

    </div>
  
}
  
  return (
    <Controller  name='category' control={control} render={({ field })=>
      <Select
        {...field}
        components={{ DropdownIndicator }}
      styles={dynamicStyles}
        options={categoriesOptions()} 
        placeholder='Вибери категорію'
        formatOptionLabel={formatOptionLabel}
  />}
  />
  );
};




