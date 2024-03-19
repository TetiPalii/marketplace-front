"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import CloseIcon from "../../../public/icons/CloseIcon";
import { ReactPortal } from "./ReactPortal/ReactPortal";


export const BaseModal = ({ onShow = true, children }) => {
  const router = useRouter();
  const modalContainerRef = useRef(null);
  const backdropRef = useRef(null);

  useEffect(() => {
    if (!onShow) return;

    const bodyScroll = (disable) => {
      document.body.style.overflow = disable ? "hidden" : "auto";
    };

    if (onShow) {
      bodyScroll(true);
    }

    const handleEsc = (e) => {
      if (e.code === "Escape") {
        router.back();
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      bodyScroll(false);
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onShow, router]);

  const closeModal = () => {
    router.back();
  };

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <>
        <div
          onClick={closeModal}
          ref={backdropRef}
          className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center z-[1000]"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            ref={modalContainerRef}
            className="absolute top-1/2 left-0 mobile:w-[100%] secondMobile:max-w-[90%] max-h-[90vh] overflow-y-scroll translate-y-[-50%] pt-[30px] px-[30px] pb-[108px] bg-darkBlue rounded-[28px]"
          >
            <button
              type="button"
              onClick={closeModal}
              className="absolute top-[28px] right-[28px] w-[24px] h-[24px] p-0 bg-[transparent]"
            >
              <CloseIcon className="w-[100%] h-[100%] fill-[#fff]" />
            </button>
            {children}
          </div>
        </div>
      </>
    </ReactPortal>
  );
};
