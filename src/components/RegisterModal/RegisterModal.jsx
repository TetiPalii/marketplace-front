"use client";
import Image from "next/image";
import LogoIcon from "../../../public/icons/LogoIcon";
import { BaseModal } from "../BaseModal/BaseModal";
import rocket from "../../../public/images/rocket-iso-color.png";
import facebook from "../../../public/images/facebook.png";
import google from "../../../public/images/google.png";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useInputMask } from "@code-forge/react-input-mask";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import QuestionIcon from "../../../public/icons/QuestionIcon";
import clsx from "clsx";

const registerSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(2, { message: "Ім'я має містити мінімум 2 літери" })
      .max(15, { message: "Ім'я має містити максимум 15 літер" })
      .regex(/^[a-zA-Zа-яА-Я]+$/, {
        message: "Ім'я може містити лише літери",
      }),
    phone: z.string().regex(/^\+38 \(0\d{2}\)\d{3}-\d{2}-\d{2}$/, {
      message: "Телефон може містити лише цифри",
    }),
  })
  .required();

export const RegisterModal = ({ onShow }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      phone: "",
    },
    resolver: zodResolver(registerSchema),
  });
  const onSubmit = (data) => {
    console.log(data);
    window.location.href = "/verification/?modal=true";
  };

  const { getInputProps } = useInputMask({
    mask: "+38 (0**)***-**-**",
  });

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
          <div className="mb-[24px] h-[84px]">
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
              className={clsx("auth-input", {
                ["auth-input-error"]: errors.name,
              })}
            />
            {errors.name?.message && (
              <p className="auth-error-message">
                <span>
                  <QuestionIcon width={8} height={8} className="fill-[#fff]" />
                </span>
                {errors.name?.message}
              </p>
            )}
          </div>
          <div className="mb-[31px] h-[84px]">
            <label
              htmlFor="user-phone"
              className="block mb-[8px] text-[12px] text-[#fff]"
            >
              Телефон
            </label>
            <input
              type="text"
              id="user-phone"
              placeholder="+38 (0)___-__-__"
              {...register("phone")}
              {...getInputProps()}
              className={clsx("auth-input", {
                ["auth-input-error"]: errors.phone,
              })}
            />
            {errors.phone?.message && (
              <p className="auth-error-message">
                <span>
                  <QuestionIcon width={8} height={8} className="fill-[#fff]" />
                </span>
                {errors.phone?.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className={clsx("submit-btn", { ["submit-btn-disabled"]: errors })}
          >
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
