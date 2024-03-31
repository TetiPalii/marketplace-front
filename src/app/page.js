'use client';
import { CreateSection } from '@/sections/CreateSection/CreateSection';
import { Baner } from '@/sections/HeroSection/Baner';
import Products from '@/sections/ProductsSection/Products';
import { useSelector } from 'react-redux';

export default function Home() {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);

  return (
    <>
      {isLoggedIn && <CreateSection />}
      <Baner />
      <Products />
    </>
  );
}
