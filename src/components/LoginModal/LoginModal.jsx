'use client';
import { BaseModal } from '../BaseModal/BaseModal';
import Image from 'next/image';
import LogoIcon from '../../../public/icons/LogoIcon';
import rocket from '../../../public/images/rocket-iso-color.png';
import facebook from '../../../public/images/facebook.png';
import google from '../../../public/images/google.png';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import QuestionIcon from '../../../public/icons/QuestionIcon';
import clsx from 'clsx';
import loginAction from './loginAction';
import { savePhoneNumber } from '@/store/features/user/userSlice';
import CloseIcon from '../../../public/icons/CloseIcon';
import { InputMask } from 'primereact/inputmask';
import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

const loginSchema = z
  .object({
    phoneNumber: z.string().regex(/^\+380\d{9}$/, {
      message: 'Телефон має містити +380 та 9 цифр',
    }),
  })
  .required();

export const LoginModal = ({ onShow }) => {
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
    formState: { errors, isDirty, isSubmitting, isValid },
  } = useForm({
    defaultValues: {
      phoneNumber: '',
    },
    resolver: zodResolver(loginSchema),
  });

  useEffect(() => {
    // Перевірте, чи є помилка телефонного номера та чи вірне значення поля вводу
    // console.log("errors.phoneNumber:", errors.phoneNumber);
    // console.log("watch('phoneNumber'):", watch("phoneNumber"));
    if (watch('phoneNumber') && !watch('phoneNumber').match(/^\+380\d{9}$/)) {
      // Якщо є помилка або значення поля вводу невірне, встановіть помилку
      setError('phoneNumber', {
        message: 'Телефон має містити +380 та 9 цифр',
      });
    } else {
      // Якщо помилка відсутня і значення поля вводу вірне, встановіть помилку на null
      clearErrors('phoneNumber');
    }
  }, [watch('phoneNumber'), setError, clearErrors, watch]);

  const action = handleSubmit(async data => {
    try {
      const response = await loginAction(data);
      setServerResponse(response);
      // console.log(response);
      dispatch(savePhoneNumber(data.phoneNumber));
      router.push('/verification/?modal=true');
    } catch (error) {
      let errorMessage = 'Помилка на сервері';

      if (error.message) {
        switch (parseInt(error.message)) {
          case 404:
            errorMessage =
              'Користувач з таким номером телефона не зареєстрований';
            break;
          case 409:
            errorMessage = 'Код можна ввести повторно лише через 1 хвилину';
            break;
          default:
            break;
        }
      }

      setError('phoneNumber', { message: errorMessage });
    }
  });

  return (
    <>
      <BaseModal onShow={onShow}>
        <div className="desktop:flex items-center justify-between">
          <div className="desktop:pr-[56px] desktop:border-r">
            <p className="text-[24px] mb-[16px] mobile:hidden desktop:block">
              Вхід
            </p>
            <Link
              href="/"
              className="block mt-[24px] mb-[40px] mx-auto w-[291px] h-[72px] desktop:hidden"
            >
              <LogoIcon />
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
            <form action={action} className="mb-[136px] desktop:mb-[56px]">
              <div className="relative mb-[32px] desktop:mb-[38px] h-[84px] desktop:w-[340px]">
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
                  {...register('phoneNumber')}
                  className={clsx('auth-input', 'input-mask', {
                    ['auth-input-error']: errors.phoneNumber,
                  })}
                />
                {watch('phoneNumber') && (
                  <button
                    type="button"
                    className="clear-btn"
                    onClick={() => setValue('phoneNumber', '')}
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
                disabled={!isDirty || isSubmitting || !isValid}
                className={clsx(
                  'submit-btn',
                  (!isDirty || isSubmitting || !isValid) &&
                    'submit-btn-disabled',
                )}
              >
                {isSubmitting ? 'Завантаження...' : 'Далі'}
              </button>
            </form>
            <Link
              href="/register?modal=true"
              className="mobile:hidden desktop:block text-[16px] text-center"
            >
              Зареєструватись
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
