import { navLoggedIn } from "@/data/navLoggedIn"
import Link from "next/link";

export const NavLoggedIn = () => {
    return (
      <ul className="flex flex-col items-center gap-2 w-full">
        {navLoggedIn.map(({ name, href, icon }) => {
          return (
            <li
              key={name}
              className="h-[40px] w-full bg-gradient-to-r from-[#161C2A] via-[#990078] via-50% to-[#161C2A] to-100% ..."
            >
              <Link
                href={href}
                className="flex items-center gap-6 pl-9 py-2 w-full h-[98%] bg-darkBlue"
              >
                {icon}
                <p>{name}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    );
}