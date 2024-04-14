'use server';
import { cookies } from 'next/headers';

export async function getToken() {
  const token = cookies().get('Authorization')?.value;
  if (!token) {
    return null;
  } else {
    return token;
  }
}
