import Image from "next/image";
import React from "react";
import { about, forPartners, help } from "@/data/footerNav";
import Link from "next/link";
import { socialmediaIcons } from "@/data/footerNav";

export const Footer = () => {
  return (
    <footer className="w-full bg-darkBlue hidden md:flex flex-col gap-y-4 text-[#FFF] text-xs py-12 px-36 ">
      <div className="flex justify-between">
        <div className="flex flex-col gap-y-8">
          <h2 className="text-sm"> Інформація про компанію</h2>
          <ul className="flex flex-col gap-y-6">
            {about.map(({ name, href }) => (
              <li key={name} className="">
                <Link href={href}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-y-8">
          <h2 className="text-sm"> Допомога</h2>
          <ul className="flex flex-col gap-y-6">
            {help.map(({ name, href }) => (
              <li key={name} className="">
                <Link href={href}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-y-8">
          <h2 className="text-sm">Партнерам</h2>
          <ul className="flex flex-col gap-y-6">
            {forPartners.map(({ name, href }) => (
              <li key={name} className="">
                <Link href={href}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
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
      <button type="button" className="text-xs">
        Вийти із аккаунта
      </button>
    </footer>
  );
};
