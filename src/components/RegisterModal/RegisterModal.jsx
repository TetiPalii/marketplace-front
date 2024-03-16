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
import registerAction from "./registerAction";
import { useState } from "react";

const registerSchema = z
  .object({
    firstName: z
      .string()
      .trim()
      .min(2, { message: "Ім'я має містити мінімум 2 літери" })
      .max(15, { message: "Ім'я має містити максимум 15 літер" })
      .regex(/^[a-zA-Zа-яА-Я]+$/, {
        message: "Ім'я може містити лише літери",
      }),
    phoneNumber: z.string(),
  })
  .required();

export const RegisterModal = ({ onShow }) => {
  const [serverResponse, setServerResponse] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm({
    defaultValues: {
      firstName: "",
      phoneNumber: "",
    },
    resolver: zodResolver(registerSchema),
  });

  const action = handleSubmit(async (data) => {
    try {
      const response = await registerAction(data);
      if (response && response.phoneNumber) {
        setServerResponse(response);
        localStorage.setItem("phone", JSON.stringify(response.phoneNumber));
      }
    } catch (error) {
      console.log(error);
    }
  });

  const { getInputProps } = useInputMask({
    mask: "+380*********",
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
        <form action={action}>
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
              {...register("firstName")}
              className={clsx("auth-input", {
                ["auth-input-error"]: errors.firstName,
              })}
            />
            {errors.firstName?.message && (
              <p className="auth-error-message">
                <span>
                  <QuestionIcon width={8} height={8} className="fill-[#fff]" />
                </span>
                {errors.firstName?.message}
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
              placeholder="+380"
              {...register("phoneNumber")}
              {...getInputProps()}
              className={clsx("auth-input", {
                ["auth-input-error"]: errors.phoneNumber,
              })}
            />
            {errors.phoneNumber?.message && (
              <p className="auth-error-message">
                <span>
                  <QuestionIcon width={8} height={8} className="fill-[#fff]" />
                </span>
                {errors.phoneNumber?.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            disabled={!isDirty}
            className={clsx("submit-btn", !isDirty && "submit-btn-disabled")}
          >
            Зареєструватись
          </button>
        </form>
        Server response: {serverResponse}
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
