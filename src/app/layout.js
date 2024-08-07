/** @format */

import StoreProvider from "./StoreProvider";
import { Header } from "../sections/Header/Header";
import "./globals.css";
import { Footer } from "../sections/Footer/Footer";
import { MainPage } from "../sections/Main/MainPage";

export const metadata = {
  title: {
    default: "Нечупара- магазин дитячих товарів",
    template: "%s | Нечупара",
  },
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-w-full min-h-screen flex flex-col">
        <StoreProvider>
          <Header />
          <MainPage>{children}</MainPage>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
