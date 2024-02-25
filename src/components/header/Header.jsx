"use client";

import React, { useState } from "react";
import { MaxWidthWrapper } from "../MaxWidthWrapperr/MaxWidthWrapper";
import BurgerIcon from "../../../public/icons/BurgerIcon";
import Image from "next/image";
import { FlexContainer } from "../FlexContainer/FlexContainer";
import CartIcon from "../../../public/icons/CartIcon";
import { IconWrapper } from "../IconWrapper/IconWrapper";
import { set } from "react-hook-form";
import { MobileMenu } from "../mobileMenu/MobileMenu";


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
              src="/images/Logo-moile-sm.png"
              alt="Logo"
            />
            {!menuOpen &&
              <CartIcon width="24" height="24" fill="#fff" />
            }
          </FlexContainer>
        </MaxWidthWrapper>
      </header>
          {menuOpen && <MobileMenu setMenuOpen={ ()=>{setMenuOpen(false)}} />}
    </>
  );
};

//

// <button onClick={() => setModalOpen(true)}>Open</button>

