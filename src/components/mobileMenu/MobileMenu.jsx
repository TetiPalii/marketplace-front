"use client";
import React from "react";
import Image from "next/image";
import { IconWrapper } from "../IconWrapper/IconWrapper";
import CloseIcon from "../../../public/icons/CloseIcon";
import { FlexContainer } from "../FlexContainer/FlexContainer";
import Link from "next/link";
import rocket from "../../../public/images/rocket-iso-color.png";
import LogoMobile from "../../../public/icons/LogoMobile";
import Rocket from "../../../public/icons/Rocket";
import CatalogIcon from "../../../public/icons/CatalogIcon";
import Categories from "../../../public/icons/Categories";
import CartIcon from "../../../public/icons/CartIcon";
import LikeIcon from "../../../public/icons/LikeIcon";

export const MobileMenu = ({ setMenuOpen }) => {
  return (
    <div className="w-full h-screen fixed top-0 left-0 md:hidden  z-[300] bg-darkBlue text-[#fff] transition duration-150 easy-in-out ">
      <div className="pt-[24.5px]">
        <FlexContainer className={"justify-between pl-7 pr-3 mb-[13px]"}>
          <LogoMobile />
          <IconWrapper
            setMenuOpen={() => {
              setMenuOpen(false);
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
        <FlexContainer className={"pl-[28px] pr-[17px] py-5 bg-[#9843BD0D]"}>
          <div className="mr-6">
            <Rocket />
          </div>

          <Link href="/login/?modal=true" className="text-base  mr-5">
            Увійти
          </Link>
          <Link href="/register/?modal=true" className="text-base ml-4">
            Зареєструватись
          </Link>
        </FlexContainer>
        <FlexContainer className={" pt-[25px] flex-col items-start gap-4 "}>
          <Link
            href="/"
            className="flex items-center gap-6 border-b pl-9 py-2 w-screen"
          >
            <Categories />
            <p> Каталог</p>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-6 border-b pl-9 py-2 w-screen"
          >
            <CartIcon width="24" height="24" fill="#fff" />
            <p>Корзина</p>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-6 border-b pl-9 py-2 w-screen"
          >
            <LikeIcon width="24" height="24" fill="#fff" />
            <p>Улюбленні товари </p>
          </Link>
          <label htmlFor="" className="flex gap-6 pl-9 border-b py-2 w-screen">
            <input type="checkbox" />
            Хлопчик
          </label>
          <label htmlFor="" className="pl-9 flex gap-6 border-b  py-2 w-screen">
            <input type="checkbox" />
            Дівчинка
          </label>
        </FlexContainer>
      </div>
    </div>
  );
};
