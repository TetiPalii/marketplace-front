"use client";
import Image from "next/image";
import LogoIcon from "../../../public/icons/LogoIcon";
import { BaseModal } from "../BaseModal/BaseModal";
import rocket from "../../../public/images/rocket-iso-color.png";
import facebook from "../../../public/images/facebook.png";
import google from "../../../public/images/google.png";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import QuestionIcon from "../../../public/icons/QuestionIcon";
import clsx from "clsx";
import {registerAction} from "./registerAction";
import { useEffect, useState } from "react";
import { savePhoneNumber} from "@/store/features/user/phoneNumberSlice";
import CloseIcon from "../../../public/icons/CloseIcon";
import { InputMask } from "primereact/inputmask";
import { useRouter } from "next/navigation";
import { useAppDispatch} from "../../store/hooks";

const registerSchema = z
  .object({
    firstName: z
      .string()
      .trim()
      .min(2, { message: "Ім'я має містити мінімум 2 літери" })
      .max(15, { message: "Ім'я має містити максимум 15 літер" })
      .regex(/^[a-zA-Zа-яА-ЯІі']+$/u, {
        message: "Ім'я може містити лише літери",
      }),
    phoneNumber: z.string().regex(/^\+380\d{9}$/, {
      message: "Телефон має містити +380 та 9 цифр",
    }),
  })
  .required();

export const RegisterModal = ({ onShow }) => {
  const [serverResponse, setServerResponse] = useState(null);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const {
    register,
    watch,
    handleSubmit,
    setError,
    setValue,
    clearErrors,
    formState: { errors, isDirty, isSubmitting },
  } = useForm({
    defaultValues: {
      firstName: "",
      phoneNumber: "",
    },
    resolver: zodResolver(registerSchema),
  });

  useEffect(() => {
    // Перевірте, чи є помилка телефонного номера та чи вірне значення поля вводу
    if (watch("phoneNumber") && !watch("phoneNumber").match(/^\+380\d{9}$/)) {
      setError("phoneNumber", {
        message: "Телефон має містити +380 та 9 цифр",
      });
    } else {
      // Якщо помилка відсутня і значення поля вводу вірне, встановіть помилку на null
      clearErrors("phoneNumber");
    }
  }, [watch("phoneNumber"), setError, clearErrors, watch]);

  const action = handleSubmit(async (data) => {
    try {
      const phoneNumber:string = await registerAction(data);

      dispatch(savePhoneNumber(phoneNumber));

      router.push("/verification/?modal=true");
    } catch (error) {
      let errorMessage = "Помилка на сервері";

      if (error.message) {
        switch (parseInt(error.message)) {
          case 400:
            errorMessage = "Невірно введені дані";
            break;
          case 409:
            errorMessage = "Такий клієнт уже зареєстрований в системі";
            break;
          default:
            break;
        }
      }
      setError("phoneNumber", {
        message: errorMessage,
      });
    }
  });

  return (
    <>
      <BaseModal onShow={onShow}>
        <div className="desktop:flex items-center justify-between">
          <div className="desktop:pr-[56px] desktop:border-r">
            <p className="text-2xl mb-4 mobile:hidden desktop:block">
              Реєстрація
            </p>
            <Link
              href="/"
              className="block mt-[24px] mb-[40px] mx-auto w-[291px] h-[72px] desktop:hidden"
            >
              <LogoIcon />
            </Link>
            <ul className="flex gap-[17px] justify-center items-center mb-[16px] pt-[40px] pb-[40px] auth-bg desktop:hidden">
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
                <p className="text-[16px] text-[#fff] auth-blur">
                  Зареєструватись
                </p>
              </li>
            </ul>
            <form onSubmit={action} className="mb-[190px] desktop:mb-[24px]">
              <div className="relative mb-[24px] desktop:mb-[8px] h-[84px] desktop:w-[340px]">
                <label
                  htmlFor="user-name"
                  className="block mb-[8px] text-[12px] text-[#fff] desktop:text-[#000]"
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
                {watch("firstName") && (
                  <button
                    type="button"
                    className="clear-btn"
                    onClick={() => setValue("firstName", "")}
                  >
                    <CloseIcon className="w-[100%] h-[100%] fill-[#D0D0D0] desktop:fill-black" />
                  </button>
                )}
                {errors.firstName?.message && (
                  <p className="auth-error-message">
                    <span>
                      <QuestionIcon
                        width={8}
                        height={8}
                        className="fill-[#fff] desktop:fill-black"
                      />
                    </span>
                    {errors.firstName?.message}
                  </p>
                )}
              </div>
              <div className="relative mb-[31px] h-[84px] desktop:w-[340px]">
                <label
                  htmlFor="user-phone"
                  className="block mb-[8px] text-[12px] text-[#fff] desktop:text-[#000]"
                >
                  Телефон
                </label>
                <InputMask
                  type="tel"
                  id="user-phone"
                  mask="+380*********"
                  placeholder="+380"
                  {...register("phoneNumber")}
                  className={clsx("auth-input", "input-mask", {
                    ["auth-input-error"]: errors.phoneNumber,
                  })}
                />
                {watch("phoneNumber") && (
                  <button
                    type="button"
                    className="clear-btn"
                    onClick={() => setValue("phoneNumber", "")}
                  >
                    <CloseIcon className="w-[100%] h-[100%] fill-[#D0D0D0] desktop:fill-black" />
                  </button>
                )}
                {errors.phoneNumber?.message && (
                  <p className="auth-error-message">
                    <span>
                      <QuestionIcon
                        width={8}
                        height={8}
                        className="fill-[#fff] desktop:fill-black"
                      />
                    </span>
                    {errors.phoneNumber?.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                disabled={!isDirty || isSubmitting}
                className={clsx(
                  "submit-btn desktop:max-w-[340px]",
                  (!isDirty || isSubmitting) && "submit-btn-disabled",
                )}
              >
                {isSubmitting ? "Завантаження..." : "Зареєструватись"}
              </button>
            </form>
            <Link
              href="/login?modal=true"
              className="mobile:hidden desktop:block text-[16px] text-center"
            >
              Увійти
            </Link>
          </div>
          <p className="mobile:hidden desktop:block absolute top-1/2 left-[64%] text-[#939393]">
            або
          </p>
          <div>
            <p className="mobile:hodden desktop:block mb-[52px] text-[12px] text-center">
              Увійти як користувач
            </p>
            <ul className="flex gap-[48px] desktop:flex-col desktop:gap-[24px] justify-center desktop:items-center">
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
        </div>
      </BaseModal>
    </>
  );
};
