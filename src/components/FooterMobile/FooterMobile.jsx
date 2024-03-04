"use client";

import React from "react";
import ViberIcon from "../../../public/icons/ViberIcon";
import InstagramIcon from "../../../public/icons/InstagramIcon";
import FacebookIcon from "../../../public/icons/FacebookIcon";
import TelegramIcon from "../../../public/icons/TelegramIcon";

export const Footer = () => {
  return (
    <div className=" md:h-910 md:w-352 px-60  pt-16  pb-14 bg-darkBlue ">
     <div className="flex-basis: 20rem gap-y-12">
      <ul className="text-[#FFF] text-base list-none mb-12">Інформація про компанію</ul>
      <li className="text-[#FFF] text-xs list-none mb-12">
        <a href="">Умови використання сайту</a>
      </li>
      <li className="text-[#FFF] text-xs list-none mb-12">
        <a href="">Про нас </a>
      </li>
      <li className="text-[#FFF] text-xs list-none mb-12">
        <a href="">Контакти</a>
      </li>
      <li className="text-[#FFF] text-xs list-none mb-12">
        <a href="">Усі категорії</a>
      </li>
      </div>
      <div className="flex-basis: 14rem">
      <ul className="text-[#FFF] text-base list-none mb-12 border-b-indigo-500">Допомога</ul>
      <li className="text-[#FFF] text-xs list-none mb-12">
        <a href="">Доставка та оплата</a>
      </li>
      <li className="text-[#FFF] text-xs list-none mb-12">
        <a href="">Гарантія</a>
      </li>
      </div>
      <div className="flex-basis: 14rem">
      <ul className="text-[#FFF] text-base list-none list-none mb-12">Партнерам</ul>
      <li className="text-[#FFF] text-xs list-none mb-12">
        <a href="">Продавати на Нечупарі</a>
      </li>
      <li className="text-[#FFF] text-xs list-none mb-12">
        <a href="">Співпраця з нами</a>
      </li>
      <li className="text-[#FFF] text-xs list-none mb-12">
        <a href="">Франчайзинг</a>
      </li>
      </div>
      
    
    <div className="flex justify-between">
      <div className="w-298 h-118">
        <h2 className="text-[#656E81] text-xs mb-7">Ми у соціальних мережах</h2>
          <div className="flex justify-between ">
            <ul className=" list-none"></ul>
             <li className="list-none mr-7">
               <a href="">
                 <TelegramIcon/>
               </a>
              </li>
              <li className="list-none mr-7">
                 <a href="">
                   <FacebookIcon/>
                 </a>
              </li>
              <li className="list-none mr-7">
                 <a href="">
                   <InstagramIcon/>
                 </a>
              </li>
               <li className="list-none ">
                  <a href="">
                    <ViberIcon/>
                 </a>
               </li>
          </div>
        </div>
      <div>
      <button class="button" className="text-[#fff] text-base" >Вийти із аккаунта</button>
      </div>
    </div>
    </div>
  );
};

//  
