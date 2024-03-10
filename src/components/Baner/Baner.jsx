"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'

import {FreeMode, Pagination} from 'swiper/modules'
import { ServiceData } from '../Content';



const Baner = () => {
    return (
        <div className='flex items-center justify-center flex-col h-[176px]'>
            <Swiper
                breakpoints={{
                    320: {
                        slidersPerView: 2,
                        spaceBetween: 15
                    },
                    768: {
                        slidersPerView: 3,
                        spaceBetween:15
                    }
                }}
                freeMode={true}
                pagination={{
                    clickable: true
                }}
                modules={[FreeMode, Pagination]}
                className='max-w-[90%] lg:max-w-[80%]'
                >
                {ServiceData.map((item) => {
                    <SwiperSlide key={item.title}>
                        <div className='flex flex-col gap-6 group relative shadow-lg text-white routed-[16px] px-6 py-8 h-[176px] w-[387px] lg:h-[344px] lg:w-[1074px] cursor-pointer'>
                            <div className='absolute inset-0 bg-cover bg-center' style={{backgroundImage: `url(${item.backgroundImage})`}}/>
                            <div className='absolute inset-0 bg-black opasity-10 group-hover:opacity-40'/>
                            <div className='relative flex flex-col gap-3'/>
                            <h1 className='text-xl lg:text-2xl'>{item.title}</h1>
                            <p className='lg:text-[16px]'>{item.content}</p>

                        </div>
                    </SwiperSlide>
                })}
            </Swiper>
        </div>
    )
}

export default Baner