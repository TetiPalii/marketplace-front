import Link from 'next/link';
import { ReactElement, ReactNode } from 'react';

const buttonSettings = {
  default: {
    styles: "border-eggPlant hover:bg-eggPlant hover:text-white"
  },
  filled: {
    styles: "border-none bg-eggPlant text-white hover:bg-mediumPink"
  }
};

type ButtonType = keyof typeof buttonSettings;

export const Button = ({ 
  children, 
  href = "", 
  className,
  type = "default"
}:{
  children?: ReactNode,
  href?: string,
  className?: string,
  type?: ButtonType
}) => {
  return (
    <Link
      href={href}
      className={`
        text-center py-3 px-7 min-w-[140px] rounded-xl  border
        ${buttonSettings[type].styles}
        ${className}`}
    >
      {children}
    </Link>
  );
};
