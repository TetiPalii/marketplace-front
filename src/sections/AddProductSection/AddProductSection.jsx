'use client';
import { AddProduct } from '@/components/AddProduct/AddProduct';
import { useSelector } from 'react-redux';

export const AddProductSection = () => {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);

  return <section className="pt-7">{isLoggedIn && <AddProduct />}</section>;
};
