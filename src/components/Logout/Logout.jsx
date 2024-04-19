'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { logout } from '../../actions/logout';
import { useAppDispatch } from '@/store/hooks';
import { setIsLoggedIn } from '@/store/features/user/userSlice';

export const Logout = () => {
  const [loading, setLoading] = useState(false);

  const dispatch = useAppDispatch();
  return (
    <form
      action={async () => {
        try {
          setLoading(true);
          await logout();
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
          dispatch(setIsLoggedIn(false));
        }
      }}
    >
      {' '}
      {loading ? (
        'Loading...'
      ) : (
        <button
          className={loading ? 'text-[#656E81]' : 'text-xs'}
          type="submit"
          disabled={loading}
        >
          Вийти із аккаунта
        </button>
      )}
    </form>
  );
};
