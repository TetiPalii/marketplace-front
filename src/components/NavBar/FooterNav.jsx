'use client';
import {
  about,
  forPartners,
  help,
  socialmediaIcons,
} from '../../data/footerNav';
import Link from 'next/link';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLoggedIn } from '../../store/features/user/userSlice';
import { Logout } from '../Logout/Logout';

export const FooterNav = ({ onClose }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  return (
    <div className="flex flex-col gap-6 pl-5 mt-[72px]">
      <div className="h-[20px] w-full bg-gradient-to-r from-[#161C2A] via-[#990078] via-50% to-[#161C2A] to-100% ...">
        <div className="h-[98%] bg-darkBlue ">
          <h2 className="text-base"> Інформація про компанію</h2>
        </div>
      </div>
      <ul>
        {about.map(({ name, href }) => (
          <li key={name} onClick={onClose}>
            <Link href={href} className="text-xs">
              {name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="h-[20px] w-full bg-gradient-to-r from-[#161C2A] via-[#990078] via-50% to-[#161C2A] to-100% ...">
        <div className="h-[98%] bg-darkBlue ">
          <h2 className="text-base">Допомога</h2>
        </div>
      </div>
      <ul>
        {forPartners.map(({ name, href }) => (
          <li key={name} onClick={onClose}>
            <Link href={href} className="text-xs">
              {name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="h-[20px] w-full bg-gradient-to-r from-[#161C2A] via-[#990078] via-50% to-[#161C2A] to-100% ...">
        <div className="h-[98%] bg-darkBlue ">
          <h2 className="text-base">Допомога</h2>
        </div>
      </div>
      <ul>
        {help.map(({ name, href }) => (
          <li key={name} onClick={onClose}>
            <Link href={href} className="text-xs">
              {name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex flex-col">
        <p className="text-[#656E81] text-base mb-3">Ми у соціальних мережах</p>
        <ul className="flex items-center gap-6">
          {socialmediaIcons.map(({ id, icon }) => (
            <li key={id} onClick={onClose}>
              <Link href={'/'}>
                <Image src={icon} alt="icon" width="40" height="40" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {isLoggedIn && <Logout />}
    </div>
  );
};
