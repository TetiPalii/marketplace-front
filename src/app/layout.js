// import { Header } from "@/components/header/Header";
import { Header } from '@/sections/Header/Header';
import './globals.css';
import { Footer } from '@/sections/Footer/Footer';
import StoreProvider from './StoreProvider';
import { MainPage } from '@/sections/Main/MainPage';
// import { Suspense } from 'react';
// import { NavigationEvents } from '../components/navigation-events';

export const metadata = {
  title: {
    default: 'Нечупара- магазин дитячих товарів',
    template: '%s | Нечупара',
  },
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-full h-full">
        <StoreProvider>
          <Header />
          <MainPage>{children}</MainPage>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
//className="bg-gradient-to-r from-[#24c6dc] to-[#514a9d] ..."
//from-[#80abf0] via-[#7a678675] via-90% to-[#d5c7e3] ...">

//md:pt-[80px] px-2 mx-auto
