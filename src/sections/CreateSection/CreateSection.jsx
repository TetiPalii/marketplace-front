'use client';
import { CreateAdd } from '@/components/CreateAdd/CreateAdd';
import { useSelector } from 'react-redux';

export const CreateSection = () => {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);

  return <section className="pt-7">{isLoggedIn && <CreateAdd />}</section>;
};
