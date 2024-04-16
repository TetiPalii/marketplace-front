'use client';
import { CreateAdd } from '@/components/CreateAdd/CreateAdd';
import { useSelector } from 'react-redux';
import { SearchField } from './SerchField';
import { CatalogButton } from './CatalogButton';

export const CreateSection = () => {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);

  return <section className="px-[15px] w-full pt-7 md:pt-9">
    <div className='flex items-center justify-between mx-auto xl:w-[1082px]'>
      <CatalogButton />
      <div>
        <SearchField />
        {isLoggedIn && <CreateAdd />}
      </div>
    </div>
  </section>;
};
