import CartIcon2 from '../../../public/icons/CartIcon';
import { IconWrapper } from '@/components/IconWrapper/IconWrapper';
import LikeIcon from '../../../public/icons/LikeIcon';
import { StarRate } from '@/components/StarRate/StarRate';
import { Wrapper } from '@/components/Wrapper/Wrapper';

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

  return (
    <Wrapper className="p-6">
      <ul className="gap-x-5 gap-y-7 md:gap-x-6 w-full items-start  products">
        {body &&
          body.map(({ id, productName, productPrice }) => {
            return (
              <li
                key={id}
                className=" flex flex-col justify-center align-baseline w-full gap-y-2 "
              >
                {/* image */}
                <div className="w-full h-[151px]  md:h-[243px] border border-[#581919] rounded-md self-center">
                  {<LikeIcon fill={'#161C2A'} className="ml-auto" />}
                </div>

                {/* product description */}
                <div className="flex flex-col flex-wrap gap-y-2 ">
                  {/* product name */}
                  <div className="h-[45px]">
                    <p>{productName}</p>
                  </div>

                  <span>{productPrice}₴</span>
                  <div className="flex">
                    <StarRate />
                  </div>

                  <div>
                    <button
                      type="button"
                      className={'bg-[#990078] rounded-[50%] p-2 '}
                    >
                      <CartIcon2 />
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
      </ul>
    </Wrapper>
  );
}
//grid justify-items-center grid-cols-2
//md:grid-cols-3
