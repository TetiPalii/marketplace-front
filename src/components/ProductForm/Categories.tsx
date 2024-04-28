'use client';
import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { nanoid } from 'nanoid';
import { ProductField } from './ProductField';
import { getCategories } from "@/actions/getCategories";


export const Categories = () => {
    const [categoriesList, setCategoriesList] = useState(null);

    useEffect(() => {
        getCategories().then((res) => {

            setCategoriesList(res)
        });

    }, []);

    const categoriesOptions = () => {
        // console.log(categoriesList)
        if (categoriesList) {
            return categoriesList.map(({ categoryName, nameUkr }) => {
                return {
                    value: categoryName,
                    label: nameUkr
                }

            })
        }
    }

    return (
        <Select
            styles={{
                control: (baseStyles, state) => ({
                    ...baseStyles,
                    borderColor: '#0D0D0D',

                    backgroundColor: 'transparent',
                    borderRadius: 16,
                    zIndex: 1
                }),

            }}
            options={categoriesOptions()}
            isMulti
            closeMenuOnSelect={false}

        />

    );
};
