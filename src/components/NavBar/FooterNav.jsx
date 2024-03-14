import { about, forPartners, help } from "@/data/footerNav";
import Link from "next/link";
import Image from "next/image";
import facebook from "../../../public/images/facebook.png";
import instagram from "../../../public/images/instagram.png";
import viber from "../../../public/images/viber.png";
import telegram from "../../../public/images/telegram.png";

const socialmediaIcons = [
  { id: 1, icon: facebook },
  { id: 2, icon: instagram },
  { id: 3, icon: viber },
  { id: 4, icon: telegram },
];

export const FooterNav = () => {
  return (
    <div className="flex flex-col gap-6 pl-5 mt-[72px]">
      <div className="h-[20px] w-full bg-gradient-to-r from-[#161C2A] via-[#990078] via-50% to-[#161C2A] to-100% ...">
        <div className="h-[98%] bg-darkBlue ">
          <h2 className="text-base"> Інформація про компанію</h2>
        </div>
      </div>
      <ul>
        {about.map(({ name, href }) => (
          <li key={name}>
            <Link href={href} className="text-xs">
              {name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="h-[20px] w-full bg-gradient-to-r from-[#161C2A] via-[#990078] via-50% to-[#161C2A] to-100% ...">
        <div className="h-[98%] bg-darkBlue ">
          <h2 className="text-base">Допомога</h2>
        </div>
      </div>
      <ul>
        {forPartners.map(({ name, href }) => (
          <li key={name}>
            <Link href={href} className="text-xs">
              {name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="h-[20px] w-full bg-gradient-to-r from-[#161C2A] via-[#990078] via-50% to-[#161C2A] to-100% ...">
        <div className="h-[98%] bg-darkBlue ">
          <h2 className="text-base">Допомога</h2>
        </div>
      </div>
      <ul>
        {help.map(({ name, href }) => (
          <li key={name}>
            <Link href={href} className="text-xs">
              {name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex flex-col">
        <p className="text-[#656E81] text-base mb-3">Ми у соціальних мережах</p>
        <ul className="flex items-center gap-6">
          {socialmediaIcons.map(({ id, icon }) => (
            <li key={id}>
              <Link href={"/"}>
                <Image src={icon} alt="icon" width="40" height="40" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Link href={"/"} className="text-xs">Вийти із аккаунта</Link>
    </div>
  );
};
