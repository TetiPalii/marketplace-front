'use server';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { setCookie } from 'cookies-next';

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
  console.log(json);

  cookies().set('Authorization', json.token, {
    secure: true,
    httpOnly: true,
    expires: Date.now() + 24 * 60 * 60 * 1000 * 3,
    path: '/',
    sameSite: 'strict',
  });

  if (res.ok) {
    // setCookie('key', 'value', { req, res });
    redirect('/');
  } else {
    const error = new Error(json.error?.message);
    error.response = json.error;
    throw error;
  }
}
