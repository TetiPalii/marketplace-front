"use client";
import { BaseModal } from "../BaseModal/BaseModal";
import Image from "next/image";
import LogoIcon from "../../../public/icons/LogoIcon";
import rocket from "../../../public/images/rocket-iso-color.png";
import facebook from "../../../public/images/facebook.png";
import google from "../../../public/images/google.png";

export const LoginModal = ({ onShow }) => {
  return (
    <>
      <BaseModal onShow={onShow}>
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
            <label htmlFor="user-phone">Телефон</label>
            <input type="text" name="phone" id="user-phone" />
          </div>
          <button type="submit">Далі</button>
        </form>
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
      </BaseModal>
    </>
  );
};
