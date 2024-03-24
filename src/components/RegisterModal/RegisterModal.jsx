'use client';
import Image from 'next/image';
import LogoIcon from '../../../public/icons/LogoIcon';
import { BaseModal } from '../BaseModal/BaseModal';
import rocket from '../../../public/images/rocket-iso-color.png';
import facebook from '../../../public/images/facebook.png';
import google from '../../../public/images/google.png';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import QuestionIcon from '../../../public/icons/QuestionIcon';
import clsx from 'clsx';
import registerAction from './registerAction';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { savePhoneNumber, saveUserName } from '@/store/features/user/userSlice';
import CloseIcon from '../../../public/icons/CloseIcon';
import { InputMask } from 'primereact/inputmask';
        

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
    phoneNumber: z.string().regex(/^\+?\d+$/, {
      message: 'Телефон може містити лише цифри',
    }),
  })
  .required();

export const RegisterModal = ({ onShow }) => {
  const [serverResponse, setServerResponse] = useState(null);
  const dispatch = useDispatch();
  const {
    register,
    watch,
    handleSubmit,
    setError,
    setValue,
    formState: { errors, isDirty, isSubmitting },
  } = useForm({
    defaultValues: {
      firstName: '',
      phoneNumber: '',
    },
    resolver: zodResolver(registerSchema),
  });
  

  const action = handleSubmit(async data => {
    try {
      const response = await registerAction(data);
      setServerResponse(response);
      dispatch(saveUserName(data.firstName));
      dispatch(savePhoneNumber(data.phoneNumber));
    } catch (error) {
      // console.log(error);
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
      setError('phoneNumber', {
        message: errorMessage,
      });
    }
  });

  return (
    <>
      <BaseModal onShow={onShow}>
        <Link href="/" className="block mt-[24px] mb-[40px] mx-auto w-[291px] h-[72px]">
          <LogoIcon/>
        </Link>
        <ul className="flex gap-[17px] justify-center items-center mb-[16px] pt-[40px] pb-[40px] auth-bg">
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
        <form action={action} className='mb-[190px]'>
          <div className="relative mb-[24px] h-[84px]">
            <label
              htmlFor="user-name"
              className="block mb-[8px] text-[12px] text-[#fff]"
            >
              Ім’я
            </label>
            <input
              type="text"
              id="user-name"
              {...register('firstName')}
              className={clsx('auth-input', {
                ['auth-input-error']: errors.firstName,
              })}
            />
            {watch('firstName') && (
    <button type='button' className="clear-btn" onClick={() => setValue('firstName', '')}>
      <CloseIcon className='w-[100%] h-[100%] fill-[#D0D0D0]'/>
    </button>
  )}
            {errors.firstName?.message && (
              <p className="auth-error-message">
                <span>
                  <QuestionIcon width={8} height={8} className="fill-[#fff]" />
                </span>
                {errors.firstName?.message}
              </p>
            )}
          </div>
          <div className="relative mb-[31px] h-[84px]">
            <label
              htmlFor="user-phone"
              className="block mb-[8px] text-[12px] text-[#fff]"
            >
              Телефон
            </label>
            <InputMask
              type="tel"
              id="user-phone"
              mask='+380*********'
              placeholder="+380"
              {...register('phoneNumber')}
              className={clsx('auth-input', 'input-mask',{
                ['auth-input-error']: errors.phoneNumber,
              })}
            />
            {watch('phoneNumber') && (
              <button type='button' className="clear-btn" onClick={() => setValue('phoneNumber', '')}>
                <CloseIcon className='w-[100%] h-[100%] fill-[#D0D0D0]' />
              </button>)}
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
              'submit-btn',
              (!isDirty || isSubmitting) && 'submit-btn-disabled',
            )}
          >
            {isSubmitting ? 'Завантаження...' : 'Зареєструватись'}
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
