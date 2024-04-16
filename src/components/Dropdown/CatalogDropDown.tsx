import { ReactElement } from "react";
import { DropdownContainer } from "./DropdownContainer";
import { CatalogDropdownItem } from "./CatalogDropdownItem";

export const CatalogDropdown = ({setChosenCategoryId}:{setChosenCategoryId:(string)=>void}):ReactElement => {
    return <DropdownContainer type="headerCatalog">
        {["qwe", 'qwe', 'werrer'].map(el => (<CatalogDropdownItem key={el}>el</CatalogDropdownItem>))}
    </DropdownContainer>
}