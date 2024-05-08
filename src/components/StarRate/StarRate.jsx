import { nanoid } from "@reduxjs/toolkit";
import EmptyStartcon from "../../../public/icons/EmptyStarIcon";

export const StarRate = () => {
    const id=()=>nanoid()
    return (
        <>
            {[...Array(5)].map(star => <EmptyStartcon key={id()} />)}
        </>
    )

}