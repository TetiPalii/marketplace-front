"use client";
import { BaseModal } from "../BaseModal/BaseModal";
import Image from "next/image";
import LogoIcon from "../../../public/icons/LogoIcon";
import rocket from "../../../public/images/rocket-iso-color.png";
import facebook from "../../../public/images/facebook.png";
import google from "../../../public/images/google.png";
import Link from "next/link";
import CloseIcon from "../../../public/icons/CloseIcon";
import { useForm } from "react-hook-form";

export const CodeModal = ({ onShow }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      code: "",
    },
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <BaseModal onShow={onShow}>
        <div>
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
                htmlFor="user-code"
                className="block mb-[8px] text-[12px] text-[#fff]"
              >
                Код з СМС
              </label>
              <input
                type="text"
                id="user-code"
                {...register("code")}
                className="auth-input"
              />
              <button
                type="button"
                className="absolute top-[10px] right-[10px] translate-y-[100%] w-[24px] h-[24px] p-0 bg-[transparent]"
              >
                <CloseIcon className="w-[100%] h-[100%] fill-[#fff]" />
              </button>
            </div>
            <button type="submit" className="submit-btn mb-[88px]">
              Увійти
            </button>
          </form>
          <button
            type="button"
            className="block p-0 mb-[24px] mx-auto border-none bg-[transparent] text-[16px] text-[#fff]"
          >
            Вислати код ще раз
          </button>
          <Link
            href="/login/?modal=true"
            className="block p-0 mb-[39px] text-center border-none bg-[transparent] text-[16px] text-[#fff]"
          >
            Ввести інший номер телефону
          </Link>
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
        </div>
      </BaseModal>
    </>
  );
};
