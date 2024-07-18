/** @format */

"use client";

import { Banner } from "@/components/Baner";
import { ProductForm } from "@/components/ProductForm/ProductForm";
import Image from "next/image";
import { useEffect, useRef } from "react";

export const MainPage = ({ children }) => {
  return (
    <main className="w-full pt-[96px] flex-grow">
      <div className="max-w-1470 px-custom-15px mx-auto">
        <div className="flex gap-[16px]">
          <div className="max-w-[342px] w-[100%] h-[1000px] bg-blue-100 text-center">
            Sidebar Nav
          </div>
          <div className="flex-grow flex flex-col">
            <div className="max-h-[56px] h-[100%] bg-blue-700 text-white  text-center">
              Search Bar
            </div>
            <div className="max-h-[344px] h-[100%] mt-[36px] mb-[56px]">
              <Banner />
            </div>
            <div className="max-h-[441px] h-[100%] bg-blue-600 text-white text-center">
              For babies
            </div>
          </div>
        </div>
        {children}
      </div>
    </main>
  );
};
