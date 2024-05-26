'use client'

import LikeIcon from "@/public/icons/LikeIcon";
import CartIcon2 from "../../../public/icons/CartIcon";
import { Wrapper } from "../Wrapper/Wrapper";
import { StarRate } from "../StarRate/StarRate";
import { useEffect, useState } from "react";

export const ProductsList = ({ body }) => {
    // console.log(body)
    const [products, setProducts] = useState(null);
    useEffect(() => {
        if (body !== products) {
        setProducts(body)
    }
    },[body])
    return <Wrapper>
    <ul className="gap-x-5 gap-y-7 md:gap-x-6 w-full items-start  products">
      {products &&
        products.map(({ id, productName, productPrice }) => {
          return (
            <li
              key={id}
              className=" flex flex-col justify-center align-baseline w-full gap-y-2 "
            >
              {/* image */}
              <div className="w-full h-[151px]  md:h-[243px] border border-[#581919] rounded-md self-center">
                {<LikeIcon fill={"#161C2A"} className="ml-auto" />}
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
                    className={"bg-[#990078] rounded-[50%] p-2 "}
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
}