'use client';
import { CreateAdd } from '@/components/CreateAdd/CreateAdd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getToken } from '../../actions/getToken';

export const CreateSection = () => {
  // const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  const [token, setToken] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    async function isToken() {
      const token = await getToken();
      if (token) {
        setToken(token);
      }
      return;
    }
    isToken();
  });

  return <section className="pt-7">{token && <CreateAdd />}</section>;
};
