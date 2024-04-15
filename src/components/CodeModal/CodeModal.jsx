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
import CloseIcon from '../../../public/icons/CloseIcon';
import { useRouter } from 'next/navigation';

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
  const router = useRouter();
  
  const {
    register,
    handleSubmit,
    setError,
    watch,
    setValue,
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
      router.push('/');
    } catch (error) {
      // console.log(error);
       let errorMessage = "Помилка на сервері";

    if (error.message) {
      switch (parseInt(error.message)) {
        case 400:
          errorMessage = "Невірний код";
          break;
        case 409:
          errorMessage = "Код вже було введено";
          break;
        default:
          break;
      }
    }
      setError('inputCode', {
        message: errorMessage,
      });
    }
  });
  return (
    <>
      <BaseModal onShow={onShow}>
        <div className='desktop:flex items-center justify-between'>
           <div className='desktop:pr-[56px] desktop:border-r'>
             <p className='text-[24px] mb-[16px] mobile:hidden desktop:block'>Вхід</p>
            <Link href="/" className="block mt-[24px] mb-[82px] mx-auto w-[291px] h-[72px] desktop:hidden">
              <LogoIcon/>
            </Link>
            <ul className="flex gap-[60px] justify-center items-center mb-[82px] pt-[40px] pb-[40px] auth-bg desktop:hidden">
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
                <p className="text-[16px] text-[#fff] auth-blur">Увійти</p>
              </li>
            </ul>
            <form action={action} className='mb-[112px] desktop:mb-[56px]'>
              <div className="relative mb-[32px] desktop:mb-[38px] h-[84px] desktop:w-[340px]">
                <label
                  htmlFor="user-code"
                  className="block mb-[8px] text-[12px] text-[#fff] desktop:text-[#000]"
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
                {watch('inputCode') && (
                  <button type='button' className="clear-btn" onClick={() => setValue('inputCode', '')}>
                    <CloseIcon className='w-[100%] h-[100%] fill-[#D0D0D0] desktop:fill-black' />
                  </button>)}
                {errors.inputCode && (
                  <p className="auth-error-message">
                    <span>
                      <QuestionIcon
                        width={8}
                        height={8}
                        className="fill-[#fff] desktop:fill-black"
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
                  'submit-btn',
                  (!isDirty || isSubmitting) && 'submit-btn-disabled',
                )}
              >
                {isSubmitting ? 'Завантаження...' : 'Увійти'}
              </button>
            </form>
            <button
              type="button"
              onClick={action}
              className="block p-0 mb-[24px] desktop:mb-[8px] mx-auto border-none bg-[transparent] text-[16px] text-[#fff] desktop:text-[#000]"
            >
              Вислати код ще раз
            </button>
            <Link
              href="/login/?modal=true"
              className="block p-0 mb-[40px] desktop:mb-0 text-center border-none bg-[transparent] text-[16px] text-[#fff] desktop:text-[#000]"
            >
              Ввести інший номер телефону
            </Link>
           </div>
          <p className='mobile:hidden desktop:block absolute top-1/2 left-[64%] text-[#939393]'>або</p>
        <div>
              <p className='mobile:hodden desktop:block mb-[52px] text-[12px] text-center'>Увійти як користувач</p>
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
