import "./globals.css";
import Header from "@/components/Header/Header";

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
      <body className="bg-gradient-to-r from-gradientPink to-gradientPink2 ...">
        <Header />
        <main>{children}</main>
        {/* <Footer/> */}
      </body>
    </html>
  );
}
