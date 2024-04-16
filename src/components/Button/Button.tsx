import Link from 'next/link';
import { ReactElement } from 'react';
export const Button = ({ 
  children, 
  href = "", 
  className
}:{
  children?: ReactElement | string,
  href?: string,
  className?: string
}) => {
  return (
    <Link
      href={href}
      className={`text-center py-3 px-7 min-w-[140px] rounded-xl  border border-[#990078] hover:bg-[#990078] hover:text-white ${className}`}
    >
      {children}
    </Link>
  );
};
