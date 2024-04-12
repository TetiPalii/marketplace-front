'use client';
import { CreateAdd } from '@/components/CreateAdd/CreateAdd';
import { useAppSelector } from '../../store/hooks';

export const CreateSection = () => {
  const isLoggedin = useAppSelector(state => state.user.isLoggedIn);

  return <section className="pt-7">{isLoggedin && <CreateAdd />}</section>;
};
