"use client";

import Image from "next/image";
import { IconWrapper } from "../IconWrapper/IconWrapper";
import CloseIcon from "../../../public/icons/CloseIcon";
import { MaxWidthWrapper } from "../MaxWidthWrapperr/MaxWidthWrapper";
import { FlexContainer } from "../FlexContainer/FlexContainer";
import Link from "next/link";
import rocket from "../../../public/images/rocket-iso-color.png";

export const MobileMenu = ({ setMenuOpen }) => {
  return (
    <div className="w-full top-0 left-0 md:hidden fixed h-screen z-[300] bg-darkBlue text-[#fff] transition duration-150 easy-in-out ">
      <MaxWidthWrapper>
        <FlexContainer>
          <Image
            width="125"
            height="24"
            src="/images/logoMobile1.png"
            alt="Logo"
          />
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
      </MaxWidthWrapper>
      <FlexContainer
        className={
          "flex items-center place-content-between, pl-7 pr-4 py-5 bg-[#9843BD0D]"
        }
      >
        <Image src={rocket} alt="rocket" width="40" height="40" />
        <Link href="/login/?modal=true" className="text-base">
          Увійти
        </Link>
        <Link href="/register/?modal=true" className="text-base">
          Зареєструватись
        </Link>
      </FlexContainer>
    </div>
  );
};
