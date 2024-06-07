import Link from "next/link";
export const Button = ({ children, href }) => {
  return (
    <Link
      href={href}
      className="text-center py-3 px-7 min-w-[140px] rounded-xl  border border-eggPlant hover:bg-eggPlant hover:text-white  focus:bg-eggPlant focus:text-white"
    >
      {children}
    </Link>
  );
};
