import { AddProductSection } from '@/sections/AddProductSection/AddProductSection';
// import Slider from '@/sections/HeroSection/Baner';
import Products from '@/sections/ProductsSection/Products';
import { BuySection } from '@/sections/BuySection/BuySection.jsx';

export default function Home() {
  return (
    <>
      <AddProductSection />
      <Products />
      <BuySection />
    </>
  );
}
