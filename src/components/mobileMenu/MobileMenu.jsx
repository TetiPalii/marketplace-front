"use client";
import React, { useEffect, useState } from "react";
import { IconWrapper } from "../IconWrapper/IconWrapper";
import CloseIcon from "../../../public/icons/CloseIcon";
import { FlexContainer } from "../FlexContainer/FlexContainer";
import Link from "next/link";
import LogoMobile from "../../../public/icons/LogoMobile";
import Rocket from "../../../public/icons/Rocket";
import CartIcon from "../../../public/icons/CartIcon";
import LikeIcon from "../../../public/icons/LikeIcon";
import BurgerIcon from "../../../public/icons/BurgerIcon";
import CatalogIcon from "../../../public/icons/CatalogIcon";
const navLinks = [
  {
    name: "Каталог",
    href: "/catalog",
    icon: <CatalogIcon />,
  },
  {
    name: "Корзина",
    href: "/cart",
    icon: <CartIcon />,
  },
  ,
  {
    name: "Улюбленні товари",
    href: "/whishlist",
    icon: <LikeIcon />,
  },
];

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={
        menuOpen
          ? "sm:hidden top-0 left-0 fixed w-screen h-screen bg-[rgba(114, 200, 233, 0.25)] backdrop-blur-[2px] ease-in duration-300"
          : "fixed left-[-100%] top-0 ease-in duration-300 sm:hidden"
      }
    >
      <div
        className={
          menuOpen
            ? " w-[88%] h-screen fixed top-0 left-0 sm:hidden  z-[300] bg-darkBlue pt-6"
            : "fixed left-[-100%] top-0 ease-in duration-300"
        }
      >
        <FlexContainer className={"justify-between pl-5 pr-2"}>
          <LogoMobile />
          <IconWrapper
            setMenuOpen={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            <CloseIcon
              width="24"
              height="24"
              fill="#fff"
              className="md:hidden"
            />
          </IconWrapper>
        </FlexContainer>

        <FlexContainer
          className={
            "pl-5 pr-[17px] py-5 bg-[#9843BD0D] max-w-full justify-between"
          }
        >
          <div className="">
            <Rocket />
          </div>

          <Link href="/login/?modal=true" className="text-base ">
            Увійти
          </Link>
          <Link href="/register/?modal=true" className="text-base ">
            Зареєструватись
          </Link>
        </FlexContainer>

        <FlexContainer className={"flex-col items-start gap-4"}>
          <ul>
            {navLinks.map((link) => {
              return (
                <li
                  key={link.name}
                  className="h-[40px] block bg-gradient-to-r from-#161C2A 100% via-#990078 50% to-#161C2A 100%"
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-6 pl-9 py-2 w-full"
                  >
                    {link.icon}
                    <p>{link.name}</p>
                  </Link>
                </li>
              );
            })}
            <label htmlFor="" className="flex gap-6 pl-9  py-2 w-full">
              <input type="checkbox" />
              Хлопчик
            </label>
            <label htmlFor="" className="pl-9 flex gap-6 py-2 w-full">
              <input type="checkbox" />
              Дівчинка
            </label>
          </ul>
        </FlexContainer>
      </div>
    </div>
  );
};

{
  /* <FlexContainer className={" pt-[25px] flex-col items-start gap-4 "}>
  <Link href="/" className="flex items-center gap-6 border-b pl-9 py-2 w-full">
    <Categories />
    <p> Каталог</p>
  </Link>
  <Link href="/" className="flex items-center gap-6 border-b pl-9 py-2 w-full">
    <CartIcon width="24" height="24" fill="#fff" />
    <p>Корзина</p>
  </Link>
  <Link href="/" className="flex items-center gap-6 border-b pl-9 py-2 w-full">
    <LikeIcon width="24" height="24" fill="#fff" />
    <p>Улюбленні товари </p>
  </Link>
  <label htmlFor="" className="flex gap-6 pl-9 border-b py-2 w-full">
    <input type="checkbox" />
    Хлопчик
  </label>
  <label htmlFor="" className="pl-9 flex gap-6 border-b  py-2 w-full">
    <input type="checkbox" />
    Дівчинка
  </label>
</FlexContainer>; */
}
