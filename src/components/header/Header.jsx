"use client";

import React, { useState } from "react";
import BurgerIcon from "../../../public/icons/BurgerIcon";
import { FlexContainer } from "../FlexContainer/FlexContainer";
import CartIcon from "../../../public/icons/CartIcon";
import { IconWrapper } from "../IconWrapper/IconWrapper";
import { MobileMenu } from "../mobileMenu/MobileMenu";
import CabinetIcon from "../../../public/icons/CabinetIcon";
import LikeIcon from "../../../public/icons/LikeIcon";
import LogoMobile from "../../../public/icons/LogoMobile";
import LogoDesktop from "../../../public/icons/LogoDesktop";
import Link from "next/link";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="w-full bg-darkBlue text-lightPink px-6 py-4 md:py-3">
        <div className="mx-auto w-full">
          <FlexContainer className={"justify-center"}>
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
            <Link href={"/"} className="mx-auto md:mx-0 ">
              <LogoMobile className={"md:hidden"} />
            </Link>
            <Link href={"/"}>
              <LogoDesktop className={"hidden md:block"} />
            </Link>
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
        </div>
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
