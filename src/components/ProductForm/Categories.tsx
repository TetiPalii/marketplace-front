'use client';
import React from 'react';
import Select from 'react-select';
import { nanoid } from 'nanoid';
import { ProductField } from './ProductField';

const options: {}[] = [
    { value: 'Для немовлят', label: 'Для немовлят' },
    { value: 'Трансформери', label: 'Трансформери' },
    { value: 'Машинки', label: 'Машинки' },
    { value: 'Залізничні набори', label: 'Залізничні набори' },
    { value: 'Гелікоптери', label: 'Гелікоптери' },
    { value: 'Дитячі книжки', label: 'Дитячі книжки' },
    { value: "М'яка іграшка", label: "М'яка іграшка" },
    { value: 'Автомобільні треки', label: 'Автомобільні треки' },
    { value: 'Настільні ігри', label: 'Настільні ігри' },
    { value: 'Ляльки- пупси', label: 'Ляльки- пупси' },
    { value: 'Конструктори', label: 'Конструктори' },
    { value: 'Колекційні модельки машин', label: 'Колекційні модельки машин' },
    { value: 'Радіокеровані іграшки', label: 'Радіокеровані іграшки' },
    { value: 'Набори для творчості', label: 'Набори для творчості' },
    { value: 'Дитячі меблі', label: 'Дитячі меблі' },
    { value: 'Пазли', label: 'Пазли' },
    { value: 'Літаки', label: 'Літаки' },
    { value: 'Дитячий транспорт', label: 'Дитячий транспорт' },
];

export const Categories = () => {
    return (
        <Select
            styles={{
                control: (baseStyles, state) => ({
                    ...baseStyles,
                    borderColor: '#0D0D0D',

                    backgroundColor: 'transparent',
                    borderRadius: 16
                }),
                valueContainer: (baseStyles, state) => ({
                    ...baseStyles,
                    border: '#000000',

                })
            }}
            options={options}
            isMulti
            closeMenuOnSelect={false}
            className="categories"
        />

    );
};
