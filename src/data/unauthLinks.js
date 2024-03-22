import CartIcon from '../../public/icons/CartIcon';
import LikeIcon from '../../public/icons/LikeIcon';
import CatalogIcon from '../../public/icons/CatalogIcon';

export const unauthLinks = [
  {
    name: 'Каталог',
    href: '/catalog',
    icon: <CatalogIcon />,
  },
  {
    name: 'Корзина',
    href: '/cart',
    icon: <CartIcon />,
  },
  ,
  {
    name: 'Улюбленні товари',
    href: '/whishlist',
    icon: <LikeIcon fill="#fff" />,
  },
];
