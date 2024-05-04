// 'use server';
// import { redirect } from 'next/navigation';
// import { cookies } from 'next/headers';
import Cookies from 'js-cookie';

export default async function verificationAction(fulfilledData) {
  const res = await fetch(
    'https://marketplace-5ihn.onrender.com/api/v1/auth/login/code',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(fulfilledData),
    },
  );

  const json = await res.json();

  Cookies.set('Authorization', json.token, {
    secure: true,
    expires: 10, // expires встановлює термін дії кукі в днях
    path: '/',
    sameSite: 'strict',
  });


  if (res.ok) {
    return json;
  } else {
    throw new Error(res.status);
  }
}
