import Link from 'next/link';
import { ReactElement, ReactNode } from 'react';

const buttonSettings = {
  default: {
    styles: "border-eggPlant hover:bg-eggPlant hover:text-white"
  },
  filled: {
    styles: "border-none bg-eggPlant text-white hover:bg-mediumPink"
  },
  catalogItem: {
    styles: "bg-white border-black text-black border-none"
  }
};

type ButtonType = keyof typeof buttonSettings;

export const Button = ({ 
  children, 
  href = "", 
  className,
  type = "default",
  handleClick
}:{
  children?: ReactNode,
  href?: string,
  className?: string,
  type?: ButtonType,
  handleClick?: () => void; 
}) => {

  return (
    <>
        {type === "default" ? (
            <Link
                href={href}
                className={`
                    text-center py-3 px-7 min-w-[140px] rounded-xl border
                    ${buttonSettings[type].styles}
                    ${className}`}
            >
                {children}
            </Link>
        ) : (
            <button
                type="button"
                className={`
                    text-center py-3 px-7 min-w-[140px] rounded-xl border
                    ${type ? buttonSettings[type].styles : ""}
                    ${className}`}
                onClick={handleClick}
            >
                {children}
            </button>
        )}
    </>
);
};
