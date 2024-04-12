import Image from 'next/image';
import { FlexContainer } from '../FlexContainer/FlexContainer';
import ProfileIcon from '../../../public/icons/ProfileIcon';
import { useSelector } from 'react-redux';
import { useAppSelector } from '../../store/hooks';

export const UserInfo = () => {
  const firstName = useAppSelector(state => state.user.userName);
  console.log(firstName);

  return (
    <FlexContainer
      className={
        'pl-[30px] py-5 mb-4 bg-[#9843BD0D] max-w-full items-start gap-4'
      }
    >
      {/* <Image
        src={"/public/images/defaultUser.png"}
        alt={"user profile image"}
        width={72}
        height={72}
        className="rounded-[61px]"
      /> */}
      <ProfileIcon width={'72'} height={'72'} />
      <div className="flex flex-col">
        <p className="text-base">{firstName}</p>
        <p className="text-xs">email address</p>
      </div>
    </FlexContainer>
  );
};
