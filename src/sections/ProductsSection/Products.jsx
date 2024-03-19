"use client"

import { getProducts } from "@/actions/getProducts"
import { useEffect, useState } from "react"
import CartIcon2 from "../../../public/icons/CartIcon"
import { IconWrapper } from "@/components/IconWrapper/IconWrapper"
import LikeIcon from "../../../public/icons/LikeIcon"

export const Products = () => {
    const [products, setProducts] = useState(null)
    const getProductsList = async () => {
        const productsList = await getProducts()
        console.log(productsList.body)
      if(productsList.body) { setProducts(productsList)}
      
        return productsList
    }

    useEffect( () => {
        getProductsList().then(res=>setProducts(res.body))
        
        
    },[])
    return <section className="p-6">
        <ul  className=" grid grid-cols-2">
            {products && products.map(({id,productName, productPrice, productType}) => {
                return <li key={id}>
                    <div className="w-[166px] h-[151px] border border-[#581919] rounded-md self-center">
                        {<LikeIcon fill={"#161C2A"} className="ml-auto"/>}</div>
                    <p>{productName}</p>
                    <span>{productPrice}</span>
                    <span>{productType}</span>
                    <IconWrapper className={'bg-[#990078] rounded-[50%] p-2'}><CartIcon2/></IconWrapper>
                    
                </li>
            })}
</ul>
    </section>
} 