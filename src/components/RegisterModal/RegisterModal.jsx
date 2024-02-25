import Image from "next/image";
import LogoIcon from "../../../public/icons/LogoIcon";
import { BaseModal } from "../BaseModal/BaseModal";
import rocket from "../../../public/images/rocket-iso-color.png";
import facebook from "../../../public/images/facebook.png";
import google from "../../../public/images/google.png";

export const RegisterModal = ({ onClose, onShow }) => {
  return (
    <>
      <BaseModal onClose={onClose} onShow={onShow}>
        <div>
          <LogoIcon />
          <Image
            src={rocket}
            width={40}
            height={40}
            alt="Picture of the rocket"
          />
          <p>Зареєструватись</p>
          <form>
            <div>
              <label htmlFor="user-name">Ім’я</label>
              <input type="text" name="name" id="user-name" />
            </div>
            <div>
              <label htmlFor="user-phone">Телефон</label>
              <input type="text" name="phone" id="user-phone" />
            </div>
            <button type="submit">Зареєструватись</button>
            <ul>
              <li>
                <button type="button">
                  <Image
                    src={facebook}
                    width={40}
                    height={40}
                    alt="Picture of the facebook"
                  />
                </button>
              </li>
              <li>
                <button type="button">
                  <Image
                    src={google}
                    width={40}
                    height={40}
                    alt="Picture of the google"
                  />
                </button>
              </li>
            </ul>
          </form>
        </div>
      </BaseModal>
    </>
  );
};
