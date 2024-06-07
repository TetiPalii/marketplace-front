import { authLinks } from "../../data/authLinks";
import Link from "next/link";
import { Theme } from "../Theme/Theme";

export const AuthorizedNav = ({ onClose }) => {
  return (
    <>
      <ul className="flex flex-col items-center gap-2 w-full">
        {authLinks.map(({ name, href, icon }) => {
          return (
            <li
              onClick={onClose}
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
      <Theme />
    </>
  );
};
