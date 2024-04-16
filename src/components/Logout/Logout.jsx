'use client';
import { Suspense, useState } from 'react';
import { redirect } from 'next/navigation';
import { logout } from '../../actions/logout';

export const Logout = () => {
  const [resStatus, setResStatus] = useState(null);
  console.log(resStatus);
  return (
    <form
      action={async () => {
        const status = await logout();
        setResStatus(status);

        redirect('/');
      }}
    >
      <button className="text-xs" type="submit">
        Вийти із аккаунта
      </button>
    </form>
  );
};
