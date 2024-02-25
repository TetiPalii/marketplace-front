"use client";

import { useEffect, useRef } from "react";

export const BaseModal = ({ onShow = true, children, onClose }) => {
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
        onClose();
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      bodyScroll(false);
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onShow, onClose]);

  return (
    <>
      <div onClick={onClose} ref={backdropRef}>
        <div onClick={(e) => e.stopPropagation()} ref={modalContainerRef}>
          {children}
        </div>
      </div>
    </>
  );
};
