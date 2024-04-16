import Link from 'next/link';
export const Button = ({ children, href }) => {
  return (
    <Link
      href={href}
      className="text-center py-3 px-7 min-w-[140px] rounded-xl  border border-[#990078] hover:bg-[#990078] hover:text-white  focus:bg-[#990078] focus:text-white"
    >
      {children}
    </Link>
  );
};
