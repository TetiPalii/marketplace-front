"use client";
import { BaseModal } from "../BaseModal/BaseModal";
import Image from "next/image";
import LogoIcon from "../../../public/icons/LogoIcon";
import rocket from "../../../public/images/rocket-iso-color.png";
import facebook from "../../../public/images/facebook.png";
import google from "../../../public/images/google.png";
import { useForm } from "react-hook-form";
import EmptyCheckboxIcon from "../../../public/icons/EmptyCheckboxIcon";
import { useEffect, useState } from "react";
import CheckedCheckboxIcon from "../../../public/icons/CheckedCheckboxIcon";
import Link from "next/link";
import { useInputMask } from "@code-forge/react-input-mask";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import QuestionIcon from "../../../public/icons/QuestionIcon";
import clsx from "clsx";
import loginAction from "./loginAction";
import { useDispatch } from "react-redux";
import { savePhoneNumber } from "@/store/features/user/userSlice";

const loginSchema = z
  .object({
    phoneNumber: z.string().regex(/^\+?\d+$/, {
      message: "Телефон може містити лише цифри",
    }),
  })
  .required();

export const LoginModal = ({ onShow }) => {
  const [serverResponse, setServerResponse] = useState(null);
  const dispatch = useDispatch();
  const {
    register,
    watch,
    clearErrors,
    handleSubmit,
    setError,
    formState: { errors, isDirty, isSubmitting },
  } = useForm({
    defaultValues: {
      phoneNumber: "",
    },
    resolver: zodResolver(loginSchema),
  });

  const action = handleSubmit(async (data) => {
    try {
      const response = await loginAction(data);
      setServerResponse(response);
      dispatch(savePhoneNumber(data.phoneNumber));
    } catch (error) {
      console.log(error);
      setError('phoneNumber', {message:'Користувач з таким номером телефона не зареєстрований'} )
    }
  });

  const [checked, setChecked] = useState(false);

  const handleCheckox = () => {
    setChecked(!checked);
  };

  const { getInputProps } = useInputMask({ mask: "+380*********" });

  useEffect(() => {
    // Перевірте, чи є помилка телефонного номера та чи вірне значення поля вводу
    console.log("errors.phoneNumber:", errors.phoneNumber);
    console.log("watch('phoneNumber'):", watch("phoneNumber"));
    if (
      !errors.phoneNumber &&
      watch("phoneNumber") &&
      watch("phoneNumber").match(/^\+?\d+$/)
    ) {
      // Якщо помилка відсутня і значення поля вводу вірне, встановіть помилку на null
      // console.log("error is cleared");
      clearErrors("phoneNumber"); // Функція clearErrors видаляє помилку для конкретного поля
    }
  }, [errors.phoneNumber, watch("phoneNumber"), clearErrors]);

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
        <form action={action}>
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
            disabled={!isDirty || isSubmitting}
            className={clsx(
              "submit-btn mb-[32px]",
              (!isDirty || isSubmitting) && "submit-btn-disabled"
            )}
          >
            {isSubmitting ? "Завантаження..." : "Далі"}
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
