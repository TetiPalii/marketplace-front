"use client";

import { useEffect, useRef } from "react";
import { ReactPortal } from "./ReactPortal/ReactPortal";

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
    <ReactPortal wrapperId="react-portal-modal-container">
      <>
        <div
          onClick={onClose}
          ref={backdropRef}
          className="fixed top-0 left-0 z-[1200]"
        >
          <div onClick={(e) => e.stopPropagation()} ref={modalContainerRef}>
            {children}
          </div>
        </div>
      </>
    </ReactPortal>
  );
};
