"use client";
import { BaseModal } from "../BaseModal/BaseModal";
import Image from "next/image";
import LogoIcon from "../../../public/icons/LogoIcon";
import rocket from "../../../public/images/rocket-iso-color.png";
import facebook from "../../../public/images/facebook.png";
import google from "../../../public/images/google.png";
import { useForm } from "react-hook-form";
import CloseIcon from "../../../public/icons/CloseIcon";
import EmptyCheckboxIcon from "../../../public/icons/EmptyCheckboxIcon";
import { useState } from "react";
import CheckedCheckboxIcon from "../../../public/icons/CheckedCheckboxIcon";
import Link from "next/link";

export const LoginModal = ({ onShow }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      phone: "",
    },
  });
  const onSubmit = (data) => {
    console.log(data);
    window.location.href = "/verification/?modal=true";
  };
  const [checked, setChecked] = useState(false);

  const handleCheckox = () => {
    setChecked(!checked);
  };

  return (
    <>
      <BaseModal onShow={onShow}>
        <Link href="/" className="flex justify-center">
          <LogoIcon className="w-[291px] h-[72px] mt-[12px] mb-[40px]" />
        </Link>
        <ul className="flex gap-[60px] justify-center items-center mb-[82px]">
          <li>
            <Image
              src={rocket}
              width={40}
              height={40}
              alt="Picture of the rocket"
              className="rotate-x-[-56deg]"
            />
          </li>
          <li>
            <p className="text-[16px] text-[#fff]">Увійти</p>
          </li>
        </ul>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="relative mb-[56px]">
            <label
              htmlFor="user-phone"
              className="block mb-[8px] text-[12px] text-[#fff]"
            >
              Телефон
            </label>
            <input
              type="text"
              id="user-phone"
              {...register("phone")}
              className="auth-input"
            />
            <button
              type="button"
              className="absolute top-[10px] right-[10px] translate-y-[100%] w-[24px] h-[24px] p-0 bg-[transparent]"
            >
              <CloseIcon className="w-[100%] h-[100%] fill-[#fff]" />
            </button>
          </div>
          <button type="submit" className="submit-btn mb-[32px]">
            Далі
          </button>
          <div className="mb-[136px]">
            <input
              type="checkbox"
              id="user-remember"
              className="checkbox-input visually-hidden"
            />
            <label htmlFor="user-remember" className="checkbox-label">
              <span onClick={handleCheckox} className="cursor-pointer">
                {checked ? <CheckedCheckboxIcon /> : <EmptyCheckboxIcon />}
              </span>
              Запам’ятати мене
            </label>
          </div>
        </form>
        <ul className="flex gap-[48px] justify-center">
          <li>
            <button type="button">
              <Image
                src={facebook}
                width={40}
                height={40}
                alt="Picture of the facebook"
              />
            </button>
          </li>
          <li>
            <button type="button">
              <Image
                src={google}
                width={40}
                height={40}
                alt="Picture of the google"
              />
            </button>
          </li>
        </ul>
      </BaseModal>
    </>
  );
};
