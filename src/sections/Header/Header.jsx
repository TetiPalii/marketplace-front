'use client';

import React, { useState } from 'react';
import BurgerIcon from '@/public/icons/BurgerIcon';
import { FlexContainer } from '../../components/FlexContainer/FlexContainer';
import CartIcon from '@/public/icons/CartIcon';
import { IconWrapper } from '../../components/IconWrapper/IconWrapper';
import CabinetIcon from '../../../public/icons/CabinetIcon';
import LikeIcon from '../../../public/icons/LikeIcon';
import LogoMobile from '../../../public/icons/LogoMobile';
import LogoDesktop from '../../../public/icons/LogoDesktop';
import Link from 'next/link';
import { NavBar } from '../../components/NavBar/NavBar';
import { useAppSelector } from '../../store/hooks';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isLoggedIn = useAppSelector(state => state.user.isLoggedIn);
  const firstName = useAppSelector(state => state.user.userName);
  return (
    <>
      <header className="fixed w-full bg-darkBlue text-lightPink p-4 md:py-4 md:px-36">
        <nav className="flex justify-between h-full items-center">
          <IconWrapper
            setMenuOpen={() => {
              setMenuOpen(!menuOpen);
            }}
            className={'md:hidden'}
          >
            <BurgerIcon width="24" height="24" fill="#fff" />
          </IconWrapper>

          <Link href="/" className="md:hidden">
            <LogoMobile />
          </Link>

          <Link href="/" className={'hidden md:block'}>
            <LogoDesktop />
          </Link>

          <FlexContainer className={'justify-around md:gap-x-5'}>
            <Link
              href={isLoggedIn ? '/profile' : '/login/?modal=true'}
              className=" hidden md:block"
            >
              <CabinetIcon />
            </Link>
            {isLoggedIn && (
              <p className="hidden md:block">{`Вітаю, ${firstName}`}</p>
            )}
            <Link href={'/cart'}>
              <CartIcon />
            </Link>
            <Link href={'/whishlist'} className="hidden md:block">
              <LikeIcon fill={'#fff'} />
            </Link>
          </FlexContainer>
          <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </nav>
      </header>
    </>
  );
};
