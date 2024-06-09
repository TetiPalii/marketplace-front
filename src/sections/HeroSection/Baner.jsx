"use client";

import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import banerOne from "../../../public/images/baner-1.jpg";
import banerTwo from "../../../public/images/baner-2.jpg";
import banerThree from "../../../public/images/baner-3.jpg";
import banerFour from "../../../public/images/baner-4.jpg";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideInterval = useRef(null);

  const slides = [
    <Image src={banerOne} className=" w-full h-full flex justify-center items-center rounded-xl" alt='Nechupara'/>,
    <Image src={banerTwo} className=" w-full h-full flex justify-center items-center rounded-xl"alt='Nechupara' />,
    <Image src={banerThree} className=" w-full h-full flex justify-center items-center rounded-xl" alt='Nechupara' />,
    <Image src={banerFour} className=" w-full h-full flex justify-center items-center rounded-xl" alt='Nechupara' />,
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  useEffect(() => {
    slideInterval.current = setInterval(nextSlide, 3000); // Change slide every 3 seconds

    return () => {
      clearInterval(slideInterval.current);
    };
  }, []);

  return (
    <section className="px-[15px] pt-7 md:pt-9 flex justify-center">
      <div className="relative overflow-hidden sm:w-[640px] sm xl:w-[1082px]">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.concat(slides).map((slide, index) => (
            <div
              className="min-w-full xl:h-[344px] flex justify-center items-center bg-white rounded-2xl mx-auto"
              key={index}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Slider;
