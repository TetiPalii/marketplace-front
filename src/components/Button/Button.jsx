import Link from 'next/link';
export const Button = ({ children, href }) => {
  return (
    <Link
      href={href}
      className="text-center py-3 px-8 rounded-xl min-w-[166px] border border-[#990078] hover:bg-[#990078] hover:text-white"
    >
      {children}
    </Link>
  );
};
