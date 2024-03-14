"use client";
import Image from "next/image";
import React from "react";
import facebook from "../../../public/images/facebook.png";
import instagram from "../../../public/images/instagram.png";
import viber from "../../../public/images/viber.png";
import telegram from "../../../public/images/telegram.png";
import { about, forPartners, help } from "@/data/footerNav";
import Link from "next/link";

const socialmediaIcons = [
  { id: 1, icon: facebook },
  { id: 2, icon: instagram },
  { id: 3, icon: viber },
  { id: 4, icon: telegram },
];

export const FooterDesctop = () => {
  return (
    <div className=" w-1920 h-624  pt-16  pb-14 pl-20 pr-15 bg-darkBlue hidden md:block">
      <div className="container flex w-1448 h-211  columns-3 justify-between mb-20 ">
        <div className="flex-basis: 20rem gap-y-12">
          <h2 className="text-[#FFF] text-xl list-none mb-9">
            Інформація про компанію
          </h2>
          <ul>
            {about.map(({ name, href }) => (
              <li key={name} className="text-[#FFF] text-base list-none mb-6">
                <Link href={href}>{name}</Link>
              </li>
            ))}
          </ul>
          {/* <li className="text-[#FFF] text-base list-none mb-12">
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
          </li> */}
        </div>
        <div className="flex-basis: 14rem">
          <h2 className="text-[#FFF] text-xl list-none mb-9">Допомога</h2>
          <ul>
            {help.map(({ name, href }) => (
              <li key={name} className="text-[#FFF] text-base list-none mb-6">
                <Link href={href}>{name}</Link>
              </li>
            ))}
          </ul>
          {/* <li className="text-[#FFF] text-base list-none mb-12">
            <a href="">Доставка та оплата</a>
          </li>
          <li className="text-[#FFF] text-base list-none mb-12">
            <a href="">Гарантія</a>
          </li> */}
        </div>
        <div className="flex-basis: 14rem">
          <h2 className="text-[#FFF] text-xl list-none  mb-9">Партнерам</h2>
          <ul>
            {forPartners.map(({ name, href }) => (
              <li key={name} className="text-[#FFF] text-base list-none mb-6">
                <Link href={href}>{name}</Link>
              </li>
            ))}
          </ul>
          {/* <li className="text-[#FFF] text-base list-none mb-12">
            <a href="">Продавати на Нечупарі</a>
          </li>
          <li className="text-[#FFF] text-base list-none mb-12">
            <a href="">Співпраця з нами</a>
          </li>
          <li className="text-[#FFF] text-base list-none mb-12">
            <a href="">Франчайзинг</a>
          </li> */}
        </div>
      </div>
      <div className="flex justify-between pr-12">
        <div className="w-298 h-118">
          <h3 className="text-[#656E81] text-base mb-7">
            Ми у соціальних мережах
          </h3>
          <div className="flex justify-between gap-[24px]">
            <ul className=" list-none flex justify-between gap-[24px]">
              {/* {socialmediaIcons.map(({ id, icon }) => (
                <li key={id}>
                  <Link href={"/"}>
                    <Image scr={icon} alt="icon" width="40" height="40"></Image>
                  </Link>
                </li>
              ))} */}
              <li className="list-none">
                <a href="">
                  <Image
                    src={instagram}
                    width={40}
                    height={40}
                    alt="Picture of the instagram"
                  />
                </a>
              </li>
              <li className="list-none">
                <a href="">
                  <Image
                    src={viber}
                    width={40}
                    height={40}
                    alt="Picture of the viber"
                  />
                </a>
              </li>
              <li className="list-none">
                <a href="">
                  <Image
                    src={facebook}
                    width={40}
                    height={40}
                    alt="Picture of the facebook"
                  />
                </a>
              </li>
              <li className="list-none">
                <a href="">
                  <Image
                    src={telegram}
                    width={40}
                    height={40}
                    alt="Picture of the telegram"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <button>
            <Link href={"/"} className="text-[#656E81] text-base">
              Вийти з аккаунта
            </Link>
          </button>{" "}
        </div>
      </div>
    </div>
  );
};
