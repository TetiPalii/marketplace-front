import { Button } from "@/components/Button/Button";
import CatalogIcon from "@/public/icons/CatalogIcon";
import { ReactElement } from "react";

export const CatalogButton = () => {
    return <>
        <Button type="filled" className="flex justify-center items-center min-w-[101px] tablet:w-[342px] h-[56.04px] relative">
            <CatalogIcon className="tablet:absolute left-5"/>
            <span className="hidden tablet:block">Каталог</span>
        </Button>
    </>
}