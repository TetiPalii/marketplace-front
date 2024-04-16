import { ReactElement, ReactNode } from "react";
import { Button } from "../Button/Button";

export const CatalogDropdownItem = ({children}:{children?:ReactNode}):ReactElement => {
    return <Button type="catalogItem"> {children} </Button>
}