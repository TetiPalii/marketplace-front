import React, { useRef, ReactElement, useLayoutEffect, useState, ReactNode } from 'react';
import { CatalogDropdownItem } from './CatalogDropdownItem';

const dropdownSettings = {
    headerCatalog: {
        styles: "rounded-xl bg-[#98BAEC] flex flex-col gap-1 py-1"
    }
};

type DropDownType = keyof typeof dropdownSettings;

export const DropdownContainer = ({
    type,
    children
}: {
    type?: DropDownType,
    children?: ReactNode
}): ReactElement => {
    const ref = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState<number>(0);

    useLayoutEffect(() => {
        if (ref.current) {
            setHeight(ref.current.clientHeight);
        }
    }, []);

    return (
        <div
            ref={ref}
            className={`
                absolute left-0 w-full 
                ${type ? dropdownSettings[type].styles : ""}
            `}
            style={{ bottom: -height }}
        >
            {children}
        </div>
    );
};
