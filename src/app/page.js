import { CreateSection } from '@/sections/CreateSection/CreateSection';
import { Baner } from '../sections/HeroSection/Baner';
import Products from '../sections/ProductsSection/Products';
import { BuySection } from '../sections/BuySection/BuySection.jsx';

export default function Home() {
  return (
    <>
      <CreateSection />
      <Baner />
      <Products />
      <BuySection />
    </>
  );
}
