"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import { ServiceData } from '../Content';

export default function Baner() {
  return (
    <>
    <div className='flex items-center justify-center flex-col h-[176px]'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
         {ServiceData.map((item) => (
    <SwiperSlide key={item.title}>
        <div className='flex flex-col gap-6 group relative shadow-lg text-white routed-[16px] px-6 py-8 h-[176px] w-[387px] lg:h-[344px] lg:w-[1074px] cursor-pointer'>
            <div className='absolute inset-0 bg-cover bg-center' style={{backgroundImage: `url(${item.backgroundImage})`}}/>
            <div className='absolute inset-0 bg-black opacity-10 group-hover:opacity-40'/>
            <div className='relative flex flex-col gap-3'>
                <h1 className='text-xl lg:text-2xl'>{item.title}</h1>
                <p className='lg:text-[16px]'>{item.content}</p>
            </div>
        </div>
    </SwiperSlide>
))}
        {/* // <SwiperSlide>Slide 1</SwiperSlide>
        // <SwiperSlide>Slide 2</SwiperSlide>
        // <SwiperSlide>Slide 3</SwiperSlide>
        // <SwiperSlide>Slide 4</SwiperSlide>
        // <SwiperSlide>Slide 5</SwiperSlide>
        // <SwiperSlide>Slide 6</SwiperSlide>
        // <SwiperSlide>Slide 7</SwiperSlide>
        // <SwiperSlide>Slide 8</SwiperSlide>
        // <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
      </div>
    </>
  );
}
