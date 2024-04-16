import Link from 'next/link';
export const Button = ({ children, href, className }) => {
  return (
    <Link
      href={href}
      className={`text-center py-3 px-7 min-w-[140px] rounded-xl  border border-[#990078] hover:bg-[#990078] hover:text-white ${className}`}
    >
      {children}
    </Link>
  );
};
