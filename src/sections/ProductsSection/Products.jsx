"use client"

import { getProducts } from "@/actions/getProducts"
import { useEffect, useState } from "react"
import CartIcon2 from "../../../public/icons/CartIcon"
import { IconWrapper } from "@/components/IconWrapper/IconWrapper"
import LikeIcon from "../../../public/icons/LikeIcon"
import EmptyStartcon from "../../../public/icons/EmptyStarIcon"
import { StarRate } from "@/components/StarRate/StarRate"

export const Products = () => {
    const [products, setProducts] = useState(null)

    const getProductsList = async () => {
        const productsList = await getProducts()
        console.log('list')
        console.log(productsList.body)
        // if (productsList.body) { setProducts(productsList) }

        return productsList
    }

    useEffect(() => {
        console.log('useEffect')
        getProductsList().then(res => setProducts(res.body))


    }, [])
    return <section className="p-6">
        <ul className="grid grid-cols-2 gap-y-4 sm:flex gap-6 flex-wrap">
            {products && products.map(({ id, productName, productPrice }) => {
                return <li key={id} className="flex flex-col max-w-[166px] h-auto gap-2 justify-start content-start">
                    <div className="min-w-[166px] h-[151px] md:min-w-[220px] md:h-[243px] border border-[#581919] rounded-md self-center">
                        {<LikeIcon fill={"#161C2A"} className="ml-auto" />}</div>
                    <div className="max-w-full"><p>{productName}</p></div>
                    
                    <span>{productPrice}₴</span>
                    <div className="flex"><StarRate/></div>
                   
                    <div> <IconWrapper className={'bg-[#990078] rounded-[50%] p-2 '}><CartIcon2 /></IconWrapper></div>

                </li>
            })}
        </ul>
    </section>
} 