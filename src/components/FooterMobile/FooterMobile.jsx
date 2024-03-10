"use client";

import React from "react";
import Image from "next/image";
import facebook from "../../../public/images/facebook.png";
import instagram from "../../../public/images/instagram.png";
import viber from "../../../public/images/viber.png";
import telegram from "../../../public/images/telegram.png";

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
               <Image
                 src={telegram}
                 width={40}
                 height={40}
                 alt="Picture of the telegram"/>
               </a>
              </li>
              <li className="list-none mr-7">
                 <a href="">
                 <Image
                 src={facebook}
                 width={40}
                 height={40}
                 alt="Picture of the facebook"/>
                 </a>
              </li>
              <li className="list-none mr-7">
                 <a href="">
                   <Image
                    src={instagram}
                    width={40}
                    height={40}
                    alt="Picture of the instagram"/>
                   
                 </a>
              </li>
               <li className="list-none ">
                  <a href="">
                  <Image
                 src={viber}
                 width={40}
                 height={40}
                 alt="Picture of the viber"/>
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
