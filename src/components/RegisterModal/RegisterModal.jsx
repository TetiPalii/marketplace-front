"use client";
import Image from "next/image";
import LogoIcon from "../../../public/icons/LogoIcon";
import { BaseModal } from "../BaseModal/BaseModal";
import rocket from "../../../public/images/rocket-iso-color.png";
import facebook from "../../../public/images/facebook.png";
import google from "../../../public/images/google.png";
import { useForm } from "react-hook-form";
import CloseIcon from "../../../public/icons/CloseIcon";
import Link from "next/link";

export const RegisterModal = ({ onShow }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      phone: "",
    },
  });
  const onSubmit = (data) => {
    console.log(data);
    window.location.href = "/verification/?modal=true";
  };

  return (
    <>
      <BaseModal onShow={onShow}>
        <Link href="/" className="flex justify-center">
          <LogoIcon className="w-[291px] h-[72px] mt-[12px] mb-[40px]" />
        </Link>
        <ul className="flex gap-[17px] justify-center items-center mb-[16px]">
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
            <p className="text-[16px] text-[#fff]">Зареєструватись</p>
          </li>
        </ul>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="relative mb-[24px]">
            <label
              htmlFor="user-name"
              className="block mb-[8px] text-[12px] text-[#fff]"
            >
              Ім’я
            </label>
            <input
              type="text"
              id="user-name"
              {...register("name")}
              className="auth-input"
            />
            <button
              type="button"
              className="absolute top-[10px] right-[10px] translate-y-[100%] w-[24px] h-[24px] p-0 bg-[transparent]"
            >
              <CloseIcon className="w-[100%] h-[100%] fill-[#fff]" />
            </button>
          </div>
          <div className="relative flex flex-col gap-[8px] mb-[31px]">
            <label htmlFor="user-phone" className="text-[12px] text-[#fff]">
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
          <button type="submit" className="submit-btn">
            Зареєструватись
          </button>
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
