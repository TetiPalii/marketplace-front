import { navLinks } from "@/data/navLinks";
import Link from "next/link";

export const Navigation = () => {
    return (
      <ul className="flex flex-col items-center gap-2 w-full">
        {navLinks.map((link) => {
          return (
            <li
              key={link.name}
              className="h-[40px] w-full bg-gradient-to-r from-[#161C2A] via-[#990078] via-50% to-[#161C2A] to-100% ..."
            >
              <Link
                href={link.href}
                className="flex items-center gap-6 pl-9 py-2 w-full h-[98%] bg-darkBlue"
              >
                {link.icon}
                <p>{link.name}</p>
              </Link>
            </li>
          );
        })}
        <li className="h-[40px] w-full bg-gradient-to-r from-[#161C2A] via-[#990078] via-50% to-[#161C2A] to-100% ...">
          <label className="flex gap-6 pl-[40px]  py-2 w-full h-[98%] bg-darkBlue">
            <input type="checkbox" />
            Хлопчик
          </label>
        </li>
        <li className="h-[40px] w-full bg-gradient-to-r from-[#161C2A] via-[#990078] via-50% to-[#161C2A] to-100% ...">
          <label className="flex gap-6 pl-[40px]  py-2 w-full h-[98%] bg-darkBlue">
            <input type="checkbox" />
            Дівчинка
          </label>
        </li>
      </ul>
    );
}