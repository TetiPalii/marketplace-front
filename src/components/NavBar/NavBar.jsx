"use client";
import React, { useEffect, useState } from "react";
import { IconWrapper } from "../IconWrapper/IconWrapper";
import CloseIcon from "../../../public/icons/CloseIcon";
import { FlexContainer } from "../FlexContainer/FlexContainer";
import Link from "next/link";
import LogoMobile from "../../../public/icons/LogoMobile";
import Rocket from "../../../public/icons/Rocket";
import { Footer } from "../FooterMobile/FooterMobile";
import { Navigation } from "./Navigation";
import { NavLoggedIn } from "./NavLoggedIn";
import { UserInfo } from "../UserInfo/UserInfo";

export const NavBar = ({ menuOpen, setMenuOpen }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      return;
    }
  }, [menuOpen]);

  return (
    <div
      className={
        menuOpen
          ? "sm:hidden top-0 left-0 fixed w-screen h-screen bg-[rgba(114, 200, 233, 0.25)] backdrop-blur-[2px] ease-in duration-500 overflow-auto text-lightPink"
          : "fixed left-[-100%] top-0 ease-in duration-500 sm:hidden"
      }
    >
      <div
        className={
          menuOpen
            ? "w-[88%] h-screen fixed top-0 left-0 sm:hidden  z-[300] bg-darkBlue pt-6"
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

        {isLoggedIn ? (
          <UserInfo />
        ) : (
          <FlexContainer
            className={"pl-[30px] py-5 mb-4 bg-[#9843BD0D] max-w-full"}
          >
            <Rocket />

            <Link
              href="/login/?modal=true"
              className="text-[16px] leading-[1.2] ml-5 mr-4"
            >
              Увійти
            </Link>
            <div className="h-[56px] w-[1.5px] bg-white mr-4 element"></div>
            <Link
              href="/register/?modal=true"
              className="text-[16px] leading-[1.2] "
            >
              Зареєструватись
            </Link>
          </FlexContainer>
        )}
        {isLoggedIn ? <NavLoggedIn /> : <Navigation />}
        <Footer />
      </div>
    </div>
  );
};

//<ul className="flex flex-col items-center gap-2 w-full">
//   {navLinks.map((link) => {
//     return (
//       <li
//         key={link.name}
//         className="h-[40px] w-full bg-gradient-to-r from-[#161C2A] via-[#990078] via-50% to-[#161C2A] to-100% ..."
//       >
//         <Link
//           href={link.href}
//           className="flex items-center gap-6 pl-9 py-2 w-full h-[98%] bg-darkBlue"
//         >
//           {link.icon}
//           <p>{link.name}</p>
//         </Link>
//       </li>
//     );
//   })}
//   <li className="h-[40px] w-full bg-gradient-to-r from-[#161C2A] via-[#990078] via-50% to-[#161C2A] to-100% ...">
//     <label className="flex gap-6 pl-[40px]  py-2 w-full h-[98%] bg-darkBlue">
//       <input type="checkbox" />
//       Хлопчик
//     </label>
//   </li>
//   <li className="h-[40px] w-full bg-gradient-to-r from-[#161C2A] via-[#990078] via-50% to-[#161C2A] to-100% ...">
//     <label className="flex gap-6 pl-[40px]  py-2 w-full h-[98%] bg-darkBlue">
//       <input type="checkbox" />
//       Дівчинка
//     </label>
//   </li>
// </ul>
