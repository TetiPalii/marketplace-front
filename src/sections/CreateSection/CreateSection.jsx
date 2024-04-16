'use client';
import { CreateAdd } from '@/components/CreateAdd/CreateAdd';
import { useSelector } from 'react-redux';
import { SearchField } from './SerchField';

export const CreateSection = () => {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);

  return <section className="pt-7">
    <div>
      <SearchField />
      {isLoggedIn && <CreateAdd />}
    </div>
  </section>;
};
