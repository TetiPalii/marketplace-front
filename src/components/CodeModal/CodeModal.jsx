'use client';
import { BaseModal } from '../BaseModal/BaseModal';
import Image from 'next/image';
import LogoIcon from '../../../public/icons/LogoIcon';
import rocket from '../../../public/images/rocket-iso-color.png';
import facebook from '../../../public/images/facebook.png';
import google from '../../../public/images/google.png';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import QuestionIcon from '../../../public/icons/QuestionIcon';
import clsx from 'clsx';
import verificationAction from './verificationAction';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectPhoneNumber } from '@/store/features/user/selectors';
import { setIsLoggedIn } from '@/store/features/user/userSlice';

const varificationSchema = z
  .object({
    inputCode: z
      .string()
      .min(4, { message: 'Код має містити мінімум 4 цифри' })
      .max(4, { message: 'Код має містити максимум 4 цифри' })
      .regex(/^\d+$/, { message: 'Код має містити тільки цифри' }),
  })
  .required();

export const CodeModal = ({ onShow }) => {
  const [serverResponse, setServerResponse] = useState(null);
  const phoneNumber = useSelector(selectPhoneNumber);
  const dispatch = useDispatch();
  console.log(phoneNumber);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isDirty, isSubmitting },
  } = useForm({
    defaultValues: {
      inputCode: '',
    },
    resolver: zodResolver(varificationSchema),
  });

  const action = handleSubmit(async data => {
    try {
      const fulfilledData = {
        ...data,
        phoneNumber: phoneNumber,
      };
      // console.log("code", fulfilledData);
      const response = await verificationAction(fulfilledData);

      dispatch(setIsLoggedIn(true));

      setServerResponse(response);
    } catch (error) {
      console.log(error);
      setError('inputCode', {
        message: 'Невірний код',
      });
    }
  });
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
          <form action={action}>
            <div className="mb-[56px] h-[84px]">
              <label
                htmlFor="user-code"
                className="block mb-[8px] text-[12px] text-[#fff]"
              >
                Код з СМС
              </label>
              <input
                type="text"
                id="user-code"
                {...register('inputCode')}
                className={clsx('auth-input', {
                  ['auth-input-error']: errors.inputCode,
                })}
              />
              {errors.inputCode && (
                <p className="auth-error-message">
                  <span>
                    <QuestionIcon
                      width={8}
                      height={8}
                      className="fill-[#fff]"
                    />
                  </span>
                  {errors.inputCode?.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              disabled={!isDirty || isSubmitting}
              className={clsx(
                'submit-btn mb-[88px]',
                (!isDirty || isSubmitting) && 'submit-btn-disabled',
              )}
            >
              {isSubmitting ? 'Завантаження...' : 'Увійти'}
            </button>
          </form>
          <button
            type="button"
            onClick={action}
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
