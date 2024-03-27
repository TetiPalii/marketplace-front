'use client';

// import { getProducts } from '@/actions/getProducts';
import { useEffect, useState } from 'react';
import CartIcon2 from '../../../public/icons/CartIcon';
import { IconWrapper } from '@/components/IconWrapper/IconWrapper';
import LikeIcon from '../../../public/icons/LikeIcon';
import { StarRate } from '@/components/StarRate/StarRate';

async function getProducts() {
  const response = await fetch(
    'https://marketplace-5ihn.onrender.com/api/v1/products/s/list',
    { cache: 'no-store' },
    // {
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // },
  );
  const products = await response.json();
  return products;
}
export default async function Products() {
  const { body } = await getProducts();
  // console.log(body);
  return (
    <section className="p-6">
      <ul className="grid grid-cols-2 gap-y-4 sm:flex gap-6 flex-wrap">
        {body &&
          body.map(({ id, productName, productPrice }) => {
            return (
              <li
                key={id}
                className="flex flex-col max-w-[166px] h-auto gap-2 justify-start content-start"
              >
                <div className="min-w-[166px] h-[151px] md:min-w-[220px] md:h-[243px] border border-[#581919] rounded-md self-center">
                  {<LikeIcon fill={'#161C2A'} className="ml-auto" />}
                </div>
                <div className="max-w-full">
                  <p>{productName}</p>
                </div>

                <span>{productPrice}₴</span>
                <div className="flex">
                  <StarRate />
                </div>

                <div>
                  <IconWrapper className={'bg-[#990078] rounded-[50%] p-2 '}>
                    <CartIcon2 />
                  </IconWrapper>
                </div>
              </li>
            );
          })}
      </ul>
    </section>
  );
}
