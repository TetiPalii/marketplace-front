import React, { useRef, ReactElement, useEffect, useState } from 'react';

export const DropdownContainer = (): ReactElement => {
    const ref = useRef<HTMLDivElement>(null);   
    const [height, setHeight] = useState<number>(0);

    useEffect(() => {
        if (ref.current) {
            setHeight(ref.current.clientHeight);
        }
    }, []);

    return (
        <div ref={ref} className="absolute left-0 w-full h-fit bg-slate-700" style={{ bottom: -height }}>
            children
        </div>
    );
}
