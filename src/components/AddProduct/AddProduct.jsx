import Link from 'next/link';

export const AddProduct = () => {
  return (
    <Link
      href="/add-new-product"
      className="px-9 py-4 md:px-[77px] md:py-[17px] bg-darkBlue rounded-xl text-white mx-auto block w-[260px] md:w-[342px]"
    >
      Створити оголошення
    </Link>
  );
};
