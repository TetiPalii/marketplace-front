'use client';
import React, { useEffect, useState } from 'react';
import { IconWrapper } from '../IconWrapper/IconWrapper';
import CloseIcon from '../../../public/icons/CloseIcon';
import { FlexContainer } from '../FlexContainer/FlexContainer';
import Link from 'next/link';
import LogoMobile from '../../../public/icons/LogoMobile';
import Rocket from '../../../public/icons/Rocket';
import { UnauthorizedNav } from './UnauthorizedNav';
import { AuthorizedNav } from './AuthorizedNav';
import { UserInfo } from '../UserInfo/UserInfo';
import { FooterNav } from './FooterNav';
import { useSelector } from 'react-redux';

export const NavBar = ({ menuOpen, setMenuOpen }) => {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);

  const [authorized, setAuthorized] = useState(isLoggedIn);

  function navBarClose() {
    setMenuOpen(false);
  }
  function onBackdrop(e) {
    const { id } = e.target;

    id === 'backdrop' ? setMenuOpen(false) : null;
  }

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      return;
    }
    setAuthorized(isLoggedIn);
  }, [menuOpen, isLoggedIn]);

  return (
    <div
      className={
        menuOpen
          ? 'md:hidden top-0 left-0 fixed w-screen h-full bg-[rgba(114, 200, 233, 0.25)] backdrop-blur-[2px] ease-in duration-500 overflow-auto text-lightPink'
          : 'fixed left-[-200%] top-0 ease-in duration-500 md:hidden'
      }
      onClick={onBackdrop}
      id="backdrop"
    >
      <div
        className={
          menuOpen
            ? 'w-[88%]  fixed top-0 left-0 md:hidden  z-[999] bg-darkBlue py-6'
            : 'fixed left-[-200%] top-0 ease-in duration-300'
        }
      >
        <FlexContainer className={'justify-between pl-5 pr-2'}>
          <Link href={'/'} onClick={navBarClose}>
            <LogoMobile />
          </Link>

          <IconWrapper
            setMenuOpen={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            <CloseIcon width="24" height="24" fill="#fff" className="" />
          </IconWrapper>
        </FlexContainer>

        {authorized ? (
          <UserInfo />
        ) : (
          <FlexContainer
            className={'pl-[30px] py-5 mb-4 bg-[#9843BD0D] max-w-full'}
          >
            <Rocket />

            <Link
              onClick={navBarClose}
              href="/login/?modal=true"
              className="text-[16px] leading-[1.2] ml-5 mr-4"
            >
              Увійти
            </Link>
            <div className="h-[56px] w-[1.5px] bg-white mr-4 element"></div>
            <Link
              onClick={navBarClose}
              href="/register/?modal=true"
              className="text-[16px] leading-[1.2] "
            >
              Зареєструватись
            </Link>
          </FlexContainer>
        )}
        {isLoggedIn ? (
          <AuthorizedNav onClose={navBarClose} />
        ) : (
          <UnauthorizedNav onClose={navBarClose} />
        )}
        <FooterNav onClose={navBarClose} />
      </div>
    </div>
  );
};
