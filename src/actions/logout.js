'use server';
import { cookies } from 'next/headers';

export async function logout() {
  try {
    const response = await fetch(
      'https://marketplace-5ihn.onrender.com/api/v1/auth/logout',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    if (response.ok) {
      cookies().set('Authorization', '', { expires: new Date(0) });
      return response.status;
    }
  } catch (error) {
    console.log(error);
  }
}
