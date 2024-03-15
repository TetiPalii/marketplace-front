"use client";
import { BaseModal } from "../BaseModal/BaseModal";
import Image from "next/image";
import LogoIcon from "../../../public/icons/LogoIcon";
import rocket from "../../../public/images/rocket-iso-color.png";
import facebook from "../../../public/images/facebook.png";
import google from "../../../public/images/google.png";
import { useForm } from "react-hook-form";
import EmptyCheckboxIcon from "../../../public/icons/EmptyCheckboxIcon";
import { useState } from "react";
import CheckedCheckboxIcon from "../../../public/icons/CheckedCheckboxIcon";
import Link from "next/link";
import { useInputMask } from "@code-forge/react-input-mask";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import QuestionIcon from "../../../public/icons/QuestionIcon";
import clsx from "clsx";
import loginAction from "./loginAction";

const loginSchema = z
  .object({
    phoneNumber: z.string(),
  })
  .required();

export const LoginModal = ({ onShow }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm({
    defaultValues: {
      phoneNumber: "",
    },
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    // console.log(data);
    // window.location.href = "/verification/?modal=true";
    // try {
    //   await fetch("https://marketplace-5ihn.onrender.com/api/v1/auth/login", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(data),
    //   });
    // } catch (error) {
    //   console.log(error);
    // }
    loginAction(data);
  };

  const [checked, setChecked] = useState(false);

  const handleCheckox = () => {
    setChecked(!checked);
  };

  const { getInputProps } = useInputMask({ mask: "+380*********" });

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
          <div className="mb-[56px] h-[84px]">
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
            disabled={!isDirty}
            className={clsx(
              "submit-btn mb-[32px]",
              !isDirty && "submit-btn-disabled"
            )}
          >
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
