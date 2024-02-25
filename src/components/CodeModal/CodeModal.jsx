import { BaseModal } from "../BaseModal/BaseModal";
import Image from "next/image";
import LogoIcon from "../../../public/icons/LogoIcon";
import rocket from "../../../public/images/rocket-iso-color.png";
import facebook from "../../../public/images/facebook.png";
import google from "../../../public/images/google.png";

export const CodeModal = ({ onClose, onShow }) => {
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
          <p>Увійти</p>
          <form>
            <div>
              <label htmlFor="user-code">Код з СМС</label>
              <input type="text" name="code" id="user-code" />
            </div>
            <button type="submit">Увійти</button>
          </form>
          <p>Вислати код ще раз</p>
          <p>Ввести інший номер телефону</p>
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
        </div>
      </BaseModal>
    </>
  );
};
