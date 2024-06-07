'use server';
import { cookies } from 'next/headers';

export async function logout() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  try {
    const response = await fetch(
      `${baseUrl}/v1/auth/logout`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    if (!response.ok) {

       throw new Error(response.status);
    }

    if (response.status === 204) {
      cookies().set('Authorization', '', { expires: new Date(0) });
      return response.status;
    }
  } catch (error) {
    console.log(error);
  }
}
