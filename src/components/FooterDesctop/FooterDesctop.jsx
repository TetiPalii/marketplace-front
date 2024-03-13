"use client";
import Image from "next/image";
import React from "react";
import facebook from "../../../public/images/facebook.png";
import instagram from "../../../public/images/instagram.png";
import viber from "../../../public/images/viber.png";
import telegram from "../../../public/images/telegram.png";

export const FooterDesctop = () => {
  return (
    <div className=" w-1920 h-624  pt-16  pb-14 pl-20 pr-15 bg-darkBlue">
      <div className="container flex w-1448 h-624  columns-3 justify-between mb-20 ">
        <div className="flex-basis: 20rem gap-y-12">
          <ul className="text-[#FFF] text-xl list-none mb-12 border-b-[radial-gradient] from-purple-600 via-pink-600 to-blue-600">
            Інформація про компанію
          </ul>
          <li className="text-[#FFF] text-base list-none mb-12">
            <a href="">Умови використання сайту</a>
          </li>
          <li className="text-[#FFF] text-base list-none mb-12">
            <a href="">Про нас </a>
          </li>
          <li className="text-[#FFF] text-base list-none mb-12">
            <a href="">Контакти</a>
          </li>
          <li className="text-[#FFF] text-base list-none mb-12">
            <a href="">Усі категорії</a>
          </li>
        </div>
        <div className="flex-basis: 14rem">
          <ul className="text-[#FFF] text-xl list-none mb-12 border-b-indigo-500">
            Допомога
          </ul>
          <li className="text-[#FFF] text-base list-none mb-12">
            <a href="">Доставка та оплата</a>
          </li>
          <li className="text-[#FFF] text-base list-none mb-12">
            <a href="">Гарантія</a>
          </li>
        </div>
        <div className="flex-basis: 14rem">
          <ul className="text-[#FFF] text-xl list-none  mb-12 border-b-indigo-500">
            Партнерам
          </ul>
          <li className="text-[#FFF] text-base list-none mb-12">
            <a href="">Продавати на Нечупарі</a>
          </li>
          <li className="text-[#FFF] text-base list-none mb-12">
            <a href="">Співпраця з нами</a>
          </li>
          <li className="text-[#FFF] text-base list-none mb-12">
            <a href="">Франчайзинг</a>
          </li>
        </div>
      </div>
      <div className="flex justify-between w-1448 ">
        <div className="w-298 h-118">
          <h2 className="text-[#656E81] text-base mb-7">
            Ми у соціальних мережах
          </h2>
          <div className="flex justify-between ">
            <ul className=" list-none"></ul>
            <li className="list-none mr-7">
              <a href="">
                <Image
                  src={telegram}
                  width={40}
                  height={40}
                  alt="Picture of the telegram"
                />
              </a>
            </li>
            <li className="list-none mr-7">
              <a href="">
                <Image
                  src={facebook}
                  width={40}
                  height={40}
                  alt="Picture of the facebook"
                />
              </a>
            </li>
            <li className="list-none mr-7">
              <a href="">
                <Image
                  src={instagram}
                  width={40}
                  height={40}
                  alt="Picture of the instagram"
                />
              </a>
            </li>
            <li className="list-none ">
              <a href="">
                <Image
                  src={viber}
                  width={40}
                  height={40}
                  alt="Picture of the viber"
                />
              </a>
            </li>
          </div>
        </div>
        <div>
          <button className="button text-[#656E81] text-base">
            Вийти з аккаунта
          </button>{" "}
        </div>
      </div>
    </div>
  );
};
