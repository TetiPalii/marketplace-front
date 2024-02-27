"use client";

import React, { useState } from "react";
import { MaxWidthWrapper } from "../MaxWidthWrapperr/MaxWidthWrapper";
import BurgerIcon from "../../../public/icons/BurgerIcon";
import Image from "next/image";
import { FlexContainer } from "../FlexContainer/FlexContainer";
import CartIcon from "../../../public/icons/CartIcon";
import { IconWrapper } from "../IconWrapper/IconWrapper";
import { MobileMenu } from "../mobileMenu/MobileMenu";
import CabinetIcon from "../../../public/icons/CabinetIcon";
import LikeIcon from "../../../public/icons/LikeIcon";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="w-full bg-darkBlue text-lightPink ">
        <MaxWidthWrapper>
          <FlexContainer>
            {!menuOpen && (
              <IconWrapper
                setMenuOpen={() => {
                  setMenuOpen(true);
                }}
              >
                <BurgerIcon
                  width="24"
                  height="24"
                  fill="#ffffff"
                  className="block md:hidden"
                />
              </IconWrapper>
            )}
            <Image
              width="125"
              height="24"
              src="/images/logoMobile1.png"
              alt="Logo"
              className="block md:hidden "
            />
            <Image
              width="243"
              height="46"
              src="/images/logoDesktop1.png"
              alt="logo"
              className="hidden md:block "
            />
            <FlexContainer>
              <IconWrapper className="md:mr-11">
                <CabinetIcon
                  width="24"
                  height="24"
                  fill="#fff"
                  className="hidden md:block"
                />
              </IconWrapper>
              {!menuOpen && (
                <IconWrapper className="md:mr-6">
                  <CartIcon width="24" height="24" fill="#fff" />
                </IconWrapper>
              )}
              <IconWrapper>
                <LikeIcon
                  width="24"
                  height="24"
                  fill="#fff"
                  className="hidden md:block"
                />
              </IconWrapper>
            </FlexContainer>
          </FlexContainer>
        </MaxWidthWrapper>
      </header>
      {menuOpen && (
        <MobileMenu
          setMenuOpen={() => {
            setMenuOpen(false);
          }}
        />
      )}
    </>
  );
};


