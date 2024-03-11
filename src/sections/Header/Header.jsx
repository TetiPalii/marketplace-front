"use client";

import React, { useState } from "react";
import BurgerIcon from "../../../public/icons/BurgerIcon";
import { FlexContainer } from "../../components/FlexContainer/FlexContainer";
import CartIcon from "../../../public/icons/CartIcon";
import { IconWrapper } from "../../components/IconWrapper/IconWrapper";
import CabinetIcon from "../../../public/icons/CabinetIcon";
import LikeIcon from "../../../public/icons/LikeIcon";
import LogoMobile from "../../../public/icons/LogoMobile";
import LogoDesktop from "../../../public/icons/LogoDesktop";
import Link from "next/link";
import { NavBar } from "@/components/NavBar/NavBar";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed w-full bg-darkBlue text-lightPink px-4 py-4">
        <nav className="flex justify-between h-full items-center">
          <IconWrapper
            setMenuOpen={() => {
              setMenuOpen(!menuOpen);
            }}
            className={"sm:hidden"}
          >
            <BurgerIcon width="24" height="24" fill="#fff" />
          </IconWrapper>

          <Link href="/" className="mx-auto md:hidden">
            <LogoMobile />
          </Link>
          <Link href="/" className="hidden md:block">
            <LogoDesktop />
          </Link>

          <FlexContainer className={"justify-around"}>
            <IconWrapper className="hidden md:block">
              <CabinetIcon />
            </IconWrapper>
            <IconWrapper>
              <CartIcon />
            </IconWrapper>
            <IconWrapper className="hidden md:block">
              <LikeIcon />
            </IconWrapper>
          </FlexContainer>
          <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </nav>
      </header>
    </>
  );
};
