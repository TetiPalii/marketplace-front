import CartIcon from '../../public/icons/CartIcon';
import LikeIcon from '../../public/icons/LikeIcon';
import CatalogIcon from '../../public/icons/CatalogIcon';
import ProfileIcon from '../../public/icons/ProfileIcon';
import StatisticsIcon from '../../public/icons/StatisticsIcon';
import MessageIcon from '../../public/icons/MessageIcon';
import FilledStarIcon from '../../public/icons/FilledStarIcon';

export const authLinks = [
  {
    name: 'Профіль',
    href: '/profile',
    icon: <ProfileIcon />,
  },
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
    icon: <LikeIcon fill={'#fff'} />,
  },
  {
    name: 'Мої замовлення',
    href: '/myPurchases',
    icon: <StatisticsIcon />,
  },
  {
    name: 'Листування с продавцем',
    href: '/chat',
    icon: <MessageIcon />,
  },
  {
    name: 'Стати партнером',
    href: '/becomePartner',
    icon: <FilledStarIcon />,
  },
];
