import { Button } from "@/components/Button/Button";
import { CatalogDropdown } from "@/components/Dropdown/CatalogDropDown";
import CatalogIcon from "@/public/icons/CatalogIcon";
import { ReactElement, useState } from "react";

export const CatalogButton = ():ReactElement => {
    const [isDropdowOpen, setIsDropdownOpen] = useState(false);
    return <>
        <Button handleClick={()=>{setIsDropdownOpen(prev => !prev)}} type="filled" className="flex justify-center items-center min-w-[101px] tablet:w-[342px] h-[56.04px] relative">
            <CatalogIcon className="tablet:absolute left-5"/>
            <span className="hidden tablet:block">Каталог</span>
            {isDropdowOpen && <CatalogDropdown setChosenCategoryId={(categoryId)=>{console.log(categoryId)}} />}
        </Button>
    </>
}