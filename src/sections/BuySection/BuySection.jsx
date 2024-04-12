'use client';
import { Button } from '../../components/Button/Button';
import { Hello } from '../../components/Hello/Hello';

import { useAppSelector } from '../../store/hooks';

// import { useAppSelector } from '../../store/hooks';

export const BuySection = () => {
  const isLoggedin = useAppSelector(state => state.user.isLoggedIn);

  return isLoggedin ? null : (
    <section className="w-full px-6 pt-9 pb-4 bg-[#FFFFFF40]">
      <div className=" mx-auto my-0 flex flex-col content-center gap-8">
        <Hello />
        <div className="flex items-center justify-center gap-5">
          <Button href={'/login/?modal=true'}>Увійти</Button>
          <Button href={'/register/?modal=true'}>Зареєструватись</Button>
        </div>
      </div>
    </section>
  );
};
